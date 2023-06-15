import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtab from './src/navigation/bottomtab';
import AuthStack from './src/navigation/authStack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name='Bottomtab' component={Bottomtab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})