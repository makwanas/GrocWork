import * as types from '../constants/index'
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {useDispatch} from "react-redux";
import {addItemId} from "./groceryListAction";

const currentUserUid = auth().currentUser.uid

export const loadItems = (itemIds) => async dispatch => {
    let itemDataList = []
    for (const itemId of itemIds) {
        const itemRef = firestore().collection(types.ITEM)
        const itemDoc = await itemRef.doc(itemId).get()
        const itemData = itemDoc.data()
        itemDataList.push(itemData)
    }
    //console.log('Loading Items ==> ', itemDataList)
    if (itemDataList.length !== 0) {
        dispatch({
            type: types.LOAD_ITEMS,
            items: itemDataList
        })
    }
}

export const createItem = (groceryListId, itemName) => async dispatch => {
    const newDoc = firestore().collection(types.ITEM).doc()
    const itemRef = await newDoc.get()

    const dateCreated = new Date()
    const data = {
        itemId: itemRef.id,
        itemName,
        addedBy: currentUserUid,
        groceryListId,
        dateCreated: dateCreated.toISOString(),
        checked: false,
    }

    await firestore().collection(types.ITEM)
        .doc(itemRef.id)
        .set(data)
        .then(() => {
            // Add itemId in groc action
            dispatch(addItemId(groceryListId, itemRef.id))
            dispatch({
                type: types.CREATE_ITEM,
                item: data
            })
        })
}




