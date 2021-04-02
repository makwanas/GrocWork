import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function ContactUs({navigation}) {
    return (
        <View style={{flex:1}}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('UserAccount')}>
                <Icon name="arrow-back" size={30}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Contact Us</Text>
            </View>
            <Text style={styles.contactText}> 
                Feel free to reach out to the information provided below in case you have any suggestions/feedbacks or even problems and issues:
            </Text>
            <Text style={styles.subHeaderText}>Developers</Text>
            <View style={styles.userInformationContainer}>
            <Image style={styles.imageContainer} source={{
                uri:`https://api.multiavatar.com/Saurabhkumar Makwana.png`
            }}/>
            <View>
                <Text style={styles.userNameText}>Saurabhkumar Makwana</Text>
                <Text style={styles.userEmailText}>makwanas@oregonstate.edu</Text>
            </View>
            </View>
            <View style={styles.userInformationContainer}>
            <Image style={styles.imageContainer} source={{
                uri:`https://api.multiavatar.com/Danny.png`
            }}/>
            <View>
                <Text style={styles.userNameText}>Danny</Text>
                <Text style={styles.userEmailText}>Danny's Email</Text>
            </View>
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
    subheaderContainer:{
        backgroundColor:"#E5E7E9"
    },
    contactText:{
        paddingLeft:5,
        paddingTop:5
    },
    subHeaderText:{
        fontFamily:'OpenSans-Semibold',
        fontSize: 24,
        backgroundColor:"#E5E7E9",
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5,
        marginTop:10
    },
    imageContainer:{
        height:75,
        width:75,
        padding:5
    },
    userInformationContainer:{
        flexDirection:'row',
        borderBottomColor:'#A6ACAF',
        borderBottomWidth:2,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:5
    },
    userNameText:{
        fontFamily:'OpenSans-Semibold',
        fontSize:24,
        paddingTop:10,
        paddingLeft:20
    },
    userEmailText:{
        fontSize:14,
        paddingTop:2,
        paddingLeft:20
    }
})
