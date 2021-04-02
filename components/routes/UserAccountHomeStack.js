import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserAccount from '../screens/UserAccount';
import UserFriends from '../screens/UserFriends';
import RateGrocWork from '../screens/RateGrocWork';
import ContactUs from '../screens/ContactUs';

const Stack = createStackNavigator();

export default function UserAccountHomeStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                headerMode="none">
                <Stack.Screen name="UserAccount" component={UserAccount} />
                <Stack.Screen name="UserFriends" component={UserFriends} />
                <Stack.Screen name="RateGrocWork" component={RateGrocWork} />
                <Stack.Screen name="ContactUs" component={ContactUs} />
            </Stack.Navigator>
        </NavigationContainer >
    )}
        