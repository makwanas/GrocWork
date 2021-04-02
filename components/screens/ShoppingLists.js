import React from 'react'
import {Text, TouchableOpacity, View, TextInput, ActivityIndicator, StyleSheet, Button} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {createGroceryList} from '../../redux/actions/groceryListAction';
import SpeechAndroid from 'react-native-android-voice';

export default function ShoppingLists() {
    // async function buttonClick(){
    //     try{
    //         //More Locales will be available upon release.
    //         var spokenText = await SpeechAndroid.startSpeech("Speak now..", SpeechAndroid.US);
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
    return (
        <View style={styles.shoppingListContainer}>
                <View style={styles.afterGreetingContainer}>
                    <View style={styles.greetingContainer}>
                        <Text style={styles.greetingText}>Welcome </Text>
                    </View>
                    {/* <View>
                        <Button onPress={buttonClick}>
                            <Text>Checking speech recognition</Text>
                        </Button>
                    </View> */}

                    <View style={styles.shoppingListItemContainer}>
                        <Formik
                            initialValues={{shoppingListName: ''}}
                            onSubmit={(values, actions) => {
                                console.log('Values === ', values);
                                dispatch(createGroceryList(values.shoppingListName, true))
                                actions.resetForm()
                            }}>
                            {
                                props => (
                                    <View>
                                        <TextInput
                                            placeholder='Enter Shopping List Name'
                                            onChangeText={props.handleChange('shoppingListName')}
                                            value={props.values.shoppingListName}
                                        />
                                        <TouchableOpacity onPress={() => {
                                            props.handleSubmit()
                                        }}>
                                            <Icon name="plus" color="firebrick" size={50}/>
                                        </TouchableOpacity>

                                    </View>
                                )
                            }
                        </Formik>
                    </View>

                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shoppingListContainer: {
        flex: 1
    },
    activityContainer: {
        justifyContent: 'center',
        flex: 1
    },
    greetingContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#BDC3C7',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    greetingText: {
        fontSize: 20
    },
    shoppingListItemContainer: {
        alignSelf: 'flex-end'
    },
    afterGreetingContainer: {
        flex: 1
    }
})