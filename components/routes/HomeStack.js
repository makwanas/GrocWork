import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login.js';
import Register from '../screens/Register.js';
import React from 'react';


const Stack = createStackNavigator();

function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default HomeStack


