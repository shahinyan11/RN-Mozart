import React from 'react'
import {CommonActions } from '@react-navigation/native'

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function reset(routeName) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                { name: routeName },
            ]
        })
    )
}
export function goBack() {
    navigationRef.current?.dispatch(
        CommonActions.goBack()
    )
}
