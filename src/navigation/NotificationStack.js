import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
import Activity from '../screens/home/Activity'
import Notification from '../screens/home/Notification'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const NotificationStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="notification" component={Notification} />
            <Stack.Screen name="Activity" component={Activity} />

        </Stack.Navigator>
    )
}

export default NotificationStack

const styles = StyleSheet.create({})