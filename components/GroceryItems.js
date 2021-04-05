import React from "react";
import GroceryItem from './GroceryItem'
import {Text, View} from 'react-native'

const GroceryItems = ({items}) => {
    return (
        <View>
            {
                items &&
                items.length > 0 &&
                items.map(item => {
                    <GroceryItem item={item}/>
                })
            }
        </View>
    )
}

export default GroceryItems



