import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Text, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import TitleLogo from './TitleLogo';
import HomeStack from './routes/HomeStack';
import auth from '@react-native-firebase/auth';
import ShoppingLists from './ShoppingLists';

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

        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TitleLogo />
                    <HomeStack />
                </View>
            </TouchableWithoutFeedback>

        )
    }

    return (
        <View>
            <ShoppingLists user={user} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
