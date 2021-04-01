import React, {useState} from "react";

import {View, Text, Button} from 'react-native'
import {useDispatch} from "react-redux";
import {deleteGroceryList, loadGroceryLists} from "../redux/actions/groceryListAction";

const GroceryList = ({groceryList}) => {
    const dispatch = useDispatch()
    return ( groceryList &&
        <View>
            <Text onMos>
                {groceryList.name}
            </Text>
            <Button
                title={'x'}
                onPress={()=>{
                    //console.log('press')
                    dispatch(deleteGroceryList(groceryList.groceryListId))
                }}
            />
        </View>
    )
}

export default GroceryList