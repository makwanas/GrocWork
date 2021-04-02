import React from 'react'
import {View, Text} from 'react-native';

export default function ToDoLists() {
    console.log("Inside to do lists")
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>To Do List tab</Text>
        </View>
    )
}


