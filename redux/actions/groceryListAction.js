import * as types from '../constants/index'
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore";

export const createGroceryList = (name, privacy) => async dispatch => {
    const currentUserUid = auth().currentUser.uid
    const dateCreated = new Date()
    let data = {
        userId: currentUserUid,
        members: [currentUserUid],
        name: name,
        dateCreated: dateCreated.toISOString(),
        privacy: privacy,
        items: []
    }
    firestore()
        .collection('GroceryList')
        .add(data)
        .then(docRef => {
            console.log('Document written with ID', docRef.id)
            data = {
                ...data,
                groceryListId: docRef.id
            }
            console.log('DATA === ', data)
            dispatch({
                type: types.CREATE_GREOCERY_LIST,
                groceryList: data
            })
        })
}