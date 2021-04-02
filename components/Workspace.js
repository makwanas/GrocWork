import React, {useEffect, useState} from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import VerifyEmail from './VerifyEmail';
import HomeScreenStack from './routes/HomeScreenStack';

export default function Workspace() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing) return null;

    if (!user) {
        //console.log('User Workspace === ', user)
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <HomeScreenStack />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <VerifyEmail user={user} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEDED'
    }
})
