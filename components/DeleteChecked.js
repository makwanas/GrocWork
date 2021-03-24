import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const DeleteChecked = ({ deleteCheckedItems }) => {
    return (
        <TouchableOpacity style={styles.delbtn} onPress={() => deleteCheckedItems()}>
            <Text style={styles.delbtnText}>Delete checked items</Text>
            <Icon style={styles.delIcon} name="delete" size={25} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    delbtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
        padding: 8,
        backgroundColor: 'firebrick'
    },
    delbtnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    delIcon: {
        color: "#fff"
    }
})


export default DeleteChecked;