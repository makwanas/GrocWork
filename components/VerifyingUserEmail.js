import React, {useState} from 'react'
import {View , Text, Modal, TouchableOpacity, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth';

export default function VerifyingUserEmail({user}) {
    const [modalVisible, setModalVisible] = useState(true);
    const [newUser, setnewUser] = useState(user);
    const [error, setError] = useState('');

    const handleResendEmail = async () => {
        user.sendEmailVerification.then(() => {
            console.log("Another email sent to the user")
            setError('A confirmation link has been resent to your email id')
        })
    }

    const handleUserReload = async() =>{
        await user.reload()
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
                    <Text style={styles.modalText}>A confirmation email has been sent to your mentioned email id. Please click on the link to verify it and then press the button Ok, Done!</Text>
                    <TouchableOpacity onPress={handleUserReload}>
                        <Text>Okay done!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleResendEmail}>
                        <Text>Resend email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Close modal to test</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </Modal>
            </View>
        )
    } else{
        return(
            <View>
                <Text> User verified!</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalView:{
        backgroundColor:'white'
    }
})
