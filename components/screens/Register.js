import React, {useState, useEffect} from 'react'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import {Formik} from 'formik';
import {styles} from './Login';
import * as yup from 'yup';
import PasswordInputText from 'react-native-hide-show-password-input';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const reviewSchema = yup.object({
    name: yup.string().required().min(2),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

function Register({navigation}) {

    return (

        <View>
            <Formik
                initialValues={{
                    name: 'Guan Lun',
                    email: 'zengguanlun@gmail.com',
                    password: 'password'
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log("In Register module:", values);
                    auth().createUserWithEmailAndPassword(values.email, values.password)
                        .then((user) => {
                            console.log('User === ', user)
                            console.log('User === ', user.user.emailVerified)
                            console.log('User account created and signed in!');
                            firestore().collection('Users')
                                .doc(auth().currentUser.uid)
                                .set({
                                    name: values.name,
                                    email: values.email,
                                    listCreated: []
                                })
                                .then(() => {
                                    console.log("User added to the Firestore!");
                                })
                            auth().onAuthStateChanged(function (user) {
                                console.log('User === ', user)
                                if (user.emailVerified === false) {
                                    user.sendEmailVerification().then(() => {
                                        console.log("email verification sent to user");
                                    });
                                } else {
                                    console.log('User has been verified, so no need to verify user again')
                                }
                            });
                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.log("That email address is already in use!");
                            }
                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                            }

                            console.log(error);
                        })
                    actions.resetForm();
                }}
            >
                {
                    props => (
                        <View style={styles.loginContainer}>
                            <TextInput style={styles.inputTextContainer} placeholder='Enter your name'
                                       onChangeText={props.handleChange('name')}
                                       value={props.values.name}
                                       onBlur={props.handleBlur('name')}/>
                            <Text style={styles.errorText}>{props.touched.name && props.errors.name}</Text>
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
                                    <Text style={styles.loginText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }

            </Formik>
            <View style={styles.signInOptionsContainer}>
                <TouchableOpacity style={styles.signInOptionsButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signInOptionsText}>Go back to Login Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Register
