import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingLists from '../screens/ShoppingLists.js';
import ToDoLists from '../screens/ToDoLists.js';
import ActivityLog from '../screens/ActivityLog.js';
import UserAccount from '../screens/UserAccount.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function ShoppingListHomeStack() {
    return (
        <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="ShoppingLists" component={ShoppingLists} />
      <Tab.Screen name="ToDoLists" component={ToDoLists} />
      <Tab.Screen name="ActivityLog" component={ActivityLog} />
      <Tab.Screen name="UserAccount" component={UserAccount} />
    </Tab.Navigator>
    </NavigationContainer>
    )
}
