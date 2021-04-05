import React from "react";
import GroceryList from "./GroceryList";
import {View, Text} from 'react-native'
import {useSelector} from "react-redux";

const GroceryLists = ({groceryLists}) => {
    const {listCreated} = useSelector(state => state.user)
    console.log('Grocery Lists ==> ', groceryLists)
    return groceryLists && (
        <View>
            {groceryLists && groceryLists.map(groceryList => {
                return (
                    groceryList &&
                    groceryList.groceryListId &&
                    listCreated.includes(groceryList.groceryListId) &&
                    <GroceryList key={groceryList.groceryListId} groceryList={groceryList}/>
                )
            })}
        </View>
    )
}

export default GroceryLists