import React from 'react';
import {Text, View} from 'react-native';
import HeaderCard from './HeaderCard'

export default function VerifyEmail({user}) {
    console.log("Inside verify email:", user)
    return (
        <View>
            <HeaderCard />
            <Text> Verify Email page</Text>
        </View>
    )
}
