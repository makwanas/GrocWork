import React from "react";
import GroceryList from "./GroceryList";
import {View, Text} from 'react-native'

const GroceryLists = ({groceryLists}) => {
    return (
        <View>
            {groceryLists && groceryLists.map(groceryList => {
                return <GroceryList groceryList={groceryList}/>
            })}
        </View>
    )
}

export default GroceryLists