import * as types from '../constants/index'
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";
import {addNewGroceryListId, fetchGroceryLists, updateUser} from '../actions/userAction'
import {useSelector} from "react-redux";

export const createGroceryList = (name, privacy) => async dispatch => {
    const currentUserUid = auth().currentUser.uid
    const dateCreated = new Date()

    const newDoc = firestore().collection('GroceryList').doc()
    const newDocRef = await newDoc.get()
    const data = {
        groceryListId: newDocRef.id,
        userId: currentUserUid,
        members: [currentUserUid],
        name: name,
        dateCreated: dateCreated.toISOString(),
        privacy: privacy,
        items: []
    }
    await firestore().collection('GroceryList')
        .doc(newDocRef.id)
        .set(data)
        .then(() => {
            dispatch(addNewGroceryListId(data.groceryListId))
            dispatch({
                type: types.CREATE_GROCERY_LIST,
                // also include groceryListId in favor to delete this item in 'GroceryList' component
                groceryList: data
            })
        })

    // const res = await firestore().collection('GroceryList')
    //     .add(data)
    //     .then(docRef => {
    //         console.log('GroceryListId === ', docRef.id)

    //
    //         // update user listCreated as well
    //     })
}

export const loadGroceryLists = (groceryListIds) => async dispatch => {
    let groceryData = []
    for (const groceryListId of groceryListIds) {
        // console.log('Loading grocery lists...', groceryListId)

        const groceryListRef = firestore().collection('GroceryList')
        const groceryListDoc = await groceryListRef.doc(groceryListId).get()
        groceryData.push(groceryListDoc.data())
    }
    if (groceryData !== []) {
        dispatch({
            type: types.LOAD_GROCERY_LISTS,
            groceryList: groceryData
        })
    }
}

export const deleteGroceryList = (groceryListId) => async dispatch => {

    const groceryListRef = firestore().collection('GroceryList').doc(groceryListId)
    const groceryListDoc = await groceryListRef.get()
    const groceryListData = groceryListDoc.data()

    const members = groceryListData.members.filter(id => id !== auth().currentUser.uid)

    console.log('Members ==> ', members)
    if (members.length === 0) {
        await groceryListRef.delete()
    } else {
        await groceryListRef.update({members: members})
    }

    const updateData = {
        ...groceryListData,
        members: members
    }

    const userRef = firestore().collection('Users').doc(auth().currentUser.uid)
    const userDoc = await userRef.get()
    const userData = userDoc.data()

    const listCreated = userData.listCreated.filter(id => id !== groceryListId)
    await userRef.update({listCreated: listCreated})

    dispatch(updateUser())
    dispatch(loadGroceryLists(userData.listCreated))
}
