import * as types from '../constants/index'
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";
import {addNewGroceryListId} from '../actions/userAction'


export const createGroceryList = (name, privacy) => async dispatch => {
    const currentUserUid = auth().currentUser.uid
    const dateCreated = new Date()
    const data = {
        userId: currentUserUid,
        members: [currentUserUid],
        name: name,
        dateCreated: dateCreated.toISOString(),
        privacy: privacy,
        items: []
    }
    const res = await firestore().collection('GroceryList')
        .add(data)
        .then(docRef => {
            console.log('GroceryListId === ', docRef.id)
            dispatch({
                type: types.CREATE_GROCERY_LIST,
                groceryList: data
            })

            // update user listCreated as well
            dispatch(addNewGroceryListId(docRef.id))
            dispatch({
                type: types.ADD_NEW_GROCERYLIST_ID,
                newlyCreatedGroceryListId: docRef.id
            })
        })
}

export const loadGroceryLists = (groceryListIds) => async dispatch => {
    let groceryData = []
    for (const groceryListId of groceryListIds) {
        console.log('Loading grocery lists...', groceryListId)

        const groceryListRef = firestore().collection('GroceryList')
        const groceryListDoc = await groceryListRef.doc(groceryListId).get()
        groceryData.push(groceryListDoc.data())
    }
    if (groceryData !== []) {
        dispatch({
            type: types.LOAD_GROCERY_LISTS,
            oneGroceryList: groceryData
        })
    }
}