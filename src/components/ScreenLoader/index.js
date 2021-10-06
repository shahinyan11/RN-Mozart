import React from 'react'
import {View,ActivityIndicator} from "react-native"
import {styles} from './styles'
import {backgroundColors} from '../../assets/styles'

export const ScreenLoader = ({})=>{

    const {
        container
    } = styles;

    return (
        <View style={container}>
            <ActivityIndicator color={backgroundColors.blueAppColor} size="large" />
        </View>
    )
};