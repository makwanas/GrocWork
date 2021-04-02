import React from 'react';
import {Text, View, Button, Alert, StyleSheet} from 'react-native';
import HeaderCard from './HeaderCard';
import SpeechAndroid from 'react-native-android-voice';
import ShoppingListHomeStack from './routes/ShoppingListHomeStack';
import VerifyingUserEmail from './VerifyingUserEmail';


export default function VerifyEmail({user}) {
    // const buttonClick = async () => {
    //     try{
    //         //More Locales will be available upon release.
    //         console.log("Entering button Click at least")
    //         var spokenText = await SpeechAndroid.startSpeech("Speak now...", SpeechAndroid.ENGLISH);
    //         ToastAndroid.show(spokenText , ToastAndroid.LONG);
    //     }catch(error){
    //         switch(error){
    //             case SpeechAndroid.E_VOICE_CANCELLED:
    //                 ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
    //                 break;
    //             case SpeechAndroid.E_NO_MATCH:
    //                 ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
    //                 break;
    //             case SpeechAndroid.E_SERVER_ERROR:
    //                 ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
    //                 break;
    //             /*And more errors that will be documented on Docs upon release*/
    //         }
    //     }
    // }
    console.log("Inside verify email:", user)
    console.log("Inside verify email:", user.emailVerified)

    
    
    return (
        
        <View style={styles.container}>
            <HeaderCard />
            {user.emailVerified ? <ShoppingListHomeStack /> 
            : <VerifyingUserEmail user={user}/>}
            {/* <View>
                <Button title="Checking speech recognition" onPress={buttonClick}/>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
