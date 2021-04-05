import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ShoppingLists from '../screens/ShoppingLists.js';
import ToDoLists from '../screens/ToDoLists.js';
import ActivityLog from '../screens/ActivityLog.js';
import UserAccountHomeStack from './UserAccountHomeStack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../../redux/actions/userAction';
import {getCurrentUser} from '../../redux/selectors/index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon1 from 'react-native-vector-icons/dist/Feather';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
console.log("Checking out Tabs", Tab)

export default function ShoppingListHomeStack() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserAction = fetchUser();
        dispatch(fetchUserAction);
    }, [])

    return (
        <View style={{flex: 1}}>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    activeColor="#138D75"
                    inactiveColor="#000"
                    barStyle={{backgroundColor: "#E5E7E9"}}
                    shifting={true}
                >
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Shopping Lists',
                            tabBarIcon: ({color}) => (
                                <Icon name="shopping-bag" color={color} size={20}/>
                            )
                        }}
                        name="ShoppingLists" component={ShoppingLists}/>
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'To-Do Lists',
                            tabBarIcon: ({color}) => (
                                <Icon name="list-ul" color={color} size={20}/>
                            )
                        }}
                        name="ToDoLists" component={ToDoLists}/>
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Activity',
                            tabBarIcon: ({color}) => (
                                <Icon1 name="activity" color={color} size={20}/>
                            )
                        }}
                        name="ActivityLog" component={ActivityLog}/>
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Account',
                            tabBarIcon: ({color}) => (
                                <Icon2 name="account" color={color} size={20}/>
                            )
                        }}
                        name="UserAccountHomeStack" component={UserAccountHomeStack}/>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}
