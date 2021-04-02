import React, {useState} from 'react'
import {View , Text, Modal, TouchableOpacity, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth';
import ShoppingListHomeStack from '../routes/ShoppingListHomeStack'; 

export default function VerifyingUserEmail({navigation}) {
    const [modalVisible, setModalVisible] = useState(true);
    const [newUser, setnewUser] = useState(auth().currentUser);
    const [error, setError] = useState({
        type: false,
        value:''
    });

    const handleResendEmail = async () => {
        user.sendEmailVerification.then(() => {
            console.log("Another email sent to the user")
            setError({
                type:true,
                value:'The email has been resent on the email id provided!'
            })
        })
    }

    const handleUserReload = async() =>{
        await newUser.reload()
        setError({
            type:true,
            value:'Please click on the confirmation link in your email first!'
        })
        setnewUser(auth().currentUser)
        
    }
    console.log("Checking value of new user", newUser)

    if(!newUser.emailVerified){
        return (
            <View>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <View style={styles.modalHeaderContainer}>
                    <Text style={styles.modalheaderText}> Verify Email</Text>
                    </View>
                    <Text style={styles.modalText}>A confirmation link has been sent to your mentioned email id. Please click on the link to verify it and then press the button "Okay, Done!"</Text>
                    <View style={styles.modalButtonContainer}>
                    <TouchableOpacity style={styles.modalResetButton} onPress={handleResendEmail}>
                        <Text style={styles.modalResetText}>Resend email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOkayButton} onPress={handleUserReload}>
                        <Text style={styles.modalOkayText}>Okay, done!</Text>
                    </TouchableOpacity>
                    </View>
                    {error.type && 
                    <View>
                        <Text style={styles.modalErrorText}>{error.value}</Text>
                    </View>}
                    <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.modalTempCloseText}>Close modal to test</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.modalBackLoginButton}
                    onPress={() => 
                        {setModalVisible(!modalVisible)
                        navigation.navigate('HomeScreenStack')}}>
                        <Text style={styles.modalBackLoginText}>Take me back to Login page</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </Modal>
            </View>
        )
    } else{
        return(
            <ShoppingListHomeStack />
        )
    }
    
}

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#A6ACAF"
    },
    modalHeaderContainer:{
        backgroundColor:"#212F3C"
    },
    modalheaderText:{
        textAlign:"center",
        fontSize:24,
        fontFamily:'OpenSans-Semibold',
        color:"#fff",
        paddingBottom:5
    },
    modalView:{
        backgroundColor:"#F2F3F4",
        borderColor:'black',
        borderWidth:2,
        borderRadius:12,
        margin:10
    },
    modalText:{
        fontFamily:'OpenSans-Semibold',
        fontSize:16,
        textAlign:'center',
        padding:5
    },
    modalButtonContainer:{
        flexDirection:'row-reverse',
    },
    modalOkayButton:{
        backgroundColor:"#1ABC9C",
        borderRadius:8,
        borderWidth:2,
        borderColor:"#fff",
        marginRight:5
    },
    modalOkayText:{
        color:"#fff",
        padding:6,
        fontSize:18
    },
    modalResetButton:{
        backgroundColor:"#A6ACAF",
        borderRadius:8,
        borderWidth:2,
        borderColor:"black",
        marginRight:6
    },
    modalResetText:{
        padding:6
    },
    modalBackLoginButton:{
        marginTop:10,
        marginBottom:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    modalBackLoginText:{
        textAlign:'center',
        fontSize:16,
        color:"#52BE80",
        borderColor:"#52BE80",
        borderWidth:2,
        padding:5,
        borderRadius:10
    },
    modalTempCloseText:{
        color:"black"
    },
    modalErrorText:{
        textAlign:"center",
        color:"#E74C3C",
        borderWidth:2,
        borderColor:"#E74C3C",
        borderRadius:8,
        padding:5,
        marginTop:10,
        marginBottom:5,
        marginRight:5,
        marginLeft:5
    }
})
