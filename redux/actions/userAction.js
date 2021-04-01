import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {loadGroceryLists} from '../actions/groceryListAction'
import * as types from '../constants/index'

export function fetchUser() {
    return (dispatch => {
        firestore().collection("Users")
            .doc(auth().currentUser.uid)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    //console.log("Snapshot in action:", snapshot.data());
                    dispatch({
                        type: types.FETCH_USER,
                        currentUser: snapshot.data()
                    })
                }
                else {
                    //console.log("Snapshot does note exist");
                }
            })
    })
}

export const addNewGroceryListId = (groceryListId) => async dispatch => {
    //console.log('Grocery list id === ', groceryListId)

    const userRef = firestore().collection('Users').doc(auth().currentUser.uid)
    const userDoc = await userRef.get()
    const userData = userDoc.data()
    // console.log('User data === ', userData)

    const updateData = {
        ...userData,
        listCreated: [...userData.listCreated, groceryListId]
    }
    // console.log('Updated user data === ', updateData)

    const res = await userRef.set(updateData)

    //update user profile when user adding a new grocery list(Locally)
    dispatch({
        type: types.ADD_NEW_GROCERY_LIST_ID,
        updateData: updateData
    })
}

export const fetchGroceryLists = () => async dispatch => {
    const userRef = firestore().collection('Users').doc(auth().currentUser.uid)
    const userDoc = await userRef.get()
    const userData = userDoc.data()

    if (userData.listCreated) {
        //console.log('Load user data === ',userData.listCreated)
        dispatch(loadGroceryLists(userData.listCreated))
    }

    dispatch({
        type: types.FETCH_GROCERY_LISTS
    })
}

export const updateUser = () => async dispatch => {
    const updateData = await firestore().collection('Users').doc(auth().currentUser.uid).get()
    dispatch({
        type: types.UPDATE_USER,
        updateData: updateData.data()
    })
}