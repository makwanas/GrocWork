import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getCurrentUser} from '../../redux/selectors/index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import auth from '@react-native-firebase/auth';

export default function UserAccount({navigation}) {
    const currentUser = useSelector(getCurrentUser);

    const handleLogOut = () => {
        auth()
            .signOut()
            .then(() => console.log(`User signed out!`));
    }

    return (
        <View>
            <Text style={styles.headerText}>User Account</Text>
            <View style={styles.userInformationContainer}>
            <Image style={styles.imageContainer} source={{
                uri:`https://api.multiavatar.com/${currentUser.name}.png`
            }}/>
            <View>
                <Text style={styles.userNameText}>{currentUser.name}</Text>
                <Text style={styles.userEmailText}>{currentUser.email}</Text>
            </View>
            </View>
            <Text style={styles.subHeaderText}>Friends</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UserFriends')}>
            <View style={styles.friendsContainer}>
                <View style={{flex:1}}>
                <Text style={styles.friendsContainerText}>My Friends</Text>
                </View>
                <Icon style={styles.iconContainer} name="chevron-right" color="#5F6A6A" size={22} />
            </View>
            </TouchableOpacity>
            <Text style={styles.subHeaderText}>Feedback</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RateGrocWork')}>
            <View style={styles.friendsContainer}>
                <View style={{flex:1}}>
                <Text style={styles.friendsContainerText}>Rate GrocWork</Text>
                </View>
                <Icon style={styles.iconContainer} name="chevron-right" color="#5F6A6A" size={22} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <View style={styles.friendsContainer}>
                <View style={{flex:1}}>
                <Text style={styles.friendsContainerText}>Contact Us</Text>
                </View>
                <Icon style={styles.iconContainer} name="chevron-right" color="#5F6A6A" size={22} />
            </View>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    headerText:{
        fontFamily:'OpenSans-Semibold',
        fontSize: 28,
        backgroundColor:"#E5E7E9",
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5
    },
    imageContainer:{
        height:75,
        width:75,
        padding:5
    },
    userInformationContainer:{
        flexDirection:'row'
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
    friendsContainer:{
        flexDirection:'row'
    },
    friendsContainerText:{
        paddingLeft:5,
        paddingTop:5,
        fontSize:16,
    },
    iconContainer:{
        alignSelf:'flex-end'
    },
    logoutContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10
    },
    logoutBtnText:{
        fontSize: 22,
        marginTop: 10,
        marginRight: 10,
        padding: 5,
        color: '#52BE80'
    }
})

