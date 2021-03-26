import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/actions/index';

export default function ShoppingLists({ user }) {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        auth()
            .signOut()
            .then(() => console.log(`User signed out!`));
    }

    useEffect(() => {
        const fetchUserAction = fetchUser();
        dispatch(fetchUserAction);
    }, [])

    return (
        <View>
            <Text>Welcome {user.email}</Text>
            <TouchableOpacity onPress={handleLogOut}>
                <Text>LogOut</Text></TouchableOpacity>
        </View>
    )
}
