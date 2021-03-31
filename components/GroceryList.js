import React from "react";

import {View, Text} from 'react-native'

const GroceryList = ({groceryList}) => {

    return ( groceryList &&
        <View>
            <Text>
                {groceryList.name}
            </Text>
        </View>
    )
}

export default GroceryList