import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function UserFriends({navigation}) {
    return (
        <View style={{flex:1}}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('UserAccount')}>
                <Icon name="arrow-back" size={30}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Friend List</Text>
            </View>
            <Button title="Add Friend" />
            <View style={styles.friendListContainer}>
                <Text> You do not have any friends yet! </Text>
                <Text> Press Add Friend and enter the details to add someone!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        fontFamily:'OpenSans-Semibold',
        fontSize: 28,
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5
    },
    headerContainer:{
        flexDirection:'row',
        backgroundColor:"#E5E7E9"
    },
    iconContainer:{
        paddingLeft:5,
        paddingTop:8
    },
    friendListContainer:{
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})
