import React,{useEffect} from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingLists from '../screens/ShoppingLists.js';
import ToDoLists from '../screens/ToDoLists.js';
import ActivityLog from '../screens/ActivityLog.js';
import UserAccount from '../screens/UserAccount.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../../redux/actions/userAction';
import{getCurrentUser} from '../../redux/selectors/index'

const Tab = createMaterialBottomTabNavigator();
console.log("Checking out Tabs", Tab)

export default function ShoppingListHomeStack() {
  const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserAction = fetchUser();
        dispatch(fetchUserAction);
    }, [])

    const currentUser = useSelector(getCurrentUser);
    console.log("Current user in shopping List home stack:", currentUser)
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="ShoppingLists" component={ShoppingLists} />
      <Tab.Screen name="ToDoLists" component={ToDoLists} />
      <Tab.Screen name="ActivityLog" component={ActivityLog} />
      <Tab.Screen name="UserAccount" component={UserAccount} />
    </Tab.Navigator>
    </NavigationContainer>
    </View>
    )
}
