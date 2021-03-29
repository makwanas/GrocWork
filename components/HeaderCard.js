import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function HeaderCard() {

    const handleLogOut = () => {
        auth()
            .signOut()
            .then(() => console.log(`User signed out!`));
    }

    return (
        <View style={styles.headerContainer}>
            <Image style={styles.headerImage}source={require('./assets/logo.jpg')} />
            <Text style={styles.headerText}>GrocWork</Text>
            <View style={styles.logoutContainer}>
            <TouchableOpacity  onPress={handleLogOut}>
                <Text style={styles.logoutBtnText}>
                    LogOut
                </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    headerContainer:{
        height: 60,
        flexDirection: 'row',
        backgroundColor:'#52BE80',
    },
    headerImage:{
        borderColor:'black',
        marginLeft:5,
        marginTop:5,
        borderWidth:2,
        height:50,
        width:50
    },
    headerText:{
        paddingLeft:5,
        paddingTop:10,
        fontSize:28,
        fontFamily:"OpenSans-SemiBold",
        color: '#fff'
    },
    logoutContainer:{
        flex: 1,
        flexDirection:'row-reverse'
    },
    logoutBtnText:{
        fontSize: 22,
        marginTop: 10,
        marginRight: 10,
        padding: 5,
        backgroundColor:'firebrick',
        color: '#fff',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:10
    }
})
