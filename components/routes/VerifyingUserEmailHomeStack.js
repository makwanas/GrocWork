import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import VerifyingUserEmail from '../screens/VerifyingUserEmail';
import HomeScreenStack from './HomeScreenStack';

const Stack = createStackNavigator();

export default function VerifyingUserEmailHomeStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                headerMode="none">
                <Stack.Screen name="VerifyingUserEmail" component={VerifyingUserEmail} />
                <Stack.Screen name="HomeScreenStack" component={HomeScreenStack} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
