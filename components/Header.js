import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        height: 60,
        backgroundColor: '#76D7C4'
    },
    text: {
        color: '#000',
        fontSize: 25,
        textAlign: 'left'
    }
})

export default Header;