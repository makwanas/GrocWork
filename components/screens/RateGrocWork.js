import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function RateGrocWork({navigation}) {
    return (
        <View style={{flex:1}}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('UserAccount')}>
                <Icon name="arrow-back" size={30}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Rate Us</Text>
            </View>
            <View>
                <Text> Click on the link to drop us a feedback using the below survey form link: </Text>
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
    }
})
