import React from 'react'
import TitleLogo from '../TitleLogo'
import RegistrationHomeStack from './RegistrationHomeStack'
import {View} from 'react-native'

export default function HomeScreenStack() {
    return (
        <View style={{flex:1}}>
            <TitleLogo />
            <RegistrationHomeStack />
        </View>
    )
}
