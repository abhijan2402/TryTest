import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/auth/auth';
import OTP from '../screens/auth/otp';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Authentication" component={Auth} />
            <Stack.Screen name="OTP" component={OTP} />

        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})