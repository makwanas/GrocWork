import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function TitleLogo() {
    return (
        <View style={styles.titleLogoContainer}>
            <Image style={styles.logoImg} source={require('./assets/logo.jpg')}></Image>
            <Text style={styles.titleText}>GrocWork</Text>
            <Text style={styles.taglineText}>Even groceries require teamwork....</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleLogoContainer: {
        paddingTop: 50
    },
    taglineText: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Caveat-VariableFont_wght"
    },
    logoImg: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'black'
    },
    titleText: {
        paddingTop: 5,
        fontSize: 26,
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center'
    }
})