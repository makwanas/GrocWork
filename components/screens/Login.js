import React from 'react';
import {StyleSheet, Button, TextInput, View, TouchableOpacity, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import PasswordInputText from 'react-native-hide-show-password-input';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton} from "@react-native-google-signin/google-signin";

const reviewSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

export default function Login({navigation}) {

    GoogleSignin.configure({
        webClientId: '358524342865-nc6enc2m0sra595311mpqvd4dn2bbmc7.apps.googleusercontent.com'
    })

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        console.log(idToken)

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    return (
        <View>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log("In Login form", values);
                    auth().signInWithEmailAndPassword(values.email, values.password)
                        .then(() => {
                            console.log("User logged in!")
                        })
                        .catch(error => {
                            console.log(error);
                        })

                    actions.resetForm();
                }}
            >
                {
                    props => (
                        <View style={styles.loginContainer}>
                            <TextInput style={styles.inputTextContainer} placeholder='Enter your email'
                                       onChangeText={props.handleChange('email')}
                                       value={props.values.email}
                                       onBlur={props.handleBlur('email')}/>
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                            <PasswordInputText style={styles.inputTextContainer} placeholder='Enter your password'
                                               onChangeText={props.handleChange('password')}
                                               value={props.values.password}
                                               onBlur={props.handleBlur('password')}/>
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
                            <View style={styles.loginAndRegisterButtonContainer}>
                                <TouchableOpacity style={styles.loginButton} title="submit"
                                                  onPress={props.handleSubmit}>
                                    <Text style={styles.loginText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.registerButton}
                                                  onPress={() => navigation.navigate('Register')}>
                                    <Text style={styles.registerText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }

            </Formik>
            <View style={styles.signInOptionsContainer}>
                <TouchableOpacity style={styles.signInOptionsButton}>
                    <Text style={styles.signInOptionsText}> Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signInOptionsButton}>
                    <Text style={styles.signInOptionsText}> Sign in with Apple</Text>
                </TouchableOpacity>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => {
                        onGoogleButtonPress().then(() => {
                            console.log('Signed in with Google!')
                        })
                    }} />
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 5
    },
    inputTextContainer: {
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 10
    },
    loginAndRegisterButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 20
    },
    loginButton: {
        backgroundColor: '#16A085',
        borderRadius: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    loginText: {
        fontSize: 22,
        color: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    registerButton: {
        backgroundColor: '#AAB7B8',
        borderRadius: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    registerText: {
        fontSize: 22,
        color: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    signInOptionsContainer: {
        margin: 5,
        justifyContent: 'center'
    },
//      style={{ width: 192, height: 48 }}
//      size={GoogleSigninButton.Size.Wide}
//      color={GoogleSigninButton.Color.Dark}
    signInOptionsButton: {
        backgroundColor: '#AAB7B8',
        borderRadius: 10,
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        color: GoogleSigninButton.Color.Dark
    },
    signInOptionsText: {
        fontSize: 18,
        color: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    },
    errorText: {
        fontSize: 12,
        color: 'firebrick',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20
    }
})

