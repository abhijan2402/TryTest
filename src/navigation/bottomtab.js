import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Polls from '../../Screen/Polls'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import NotificationStack from './NotificationStack';
import CreateProfile from '../screens/profile/CreateProfile';
import notificationStack from './NotificationStack';
const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,
        showIcon: false,

        tabBarStyle: [{ position: "absolute", elevation: 0, backgroundColor: "#ffffff", borderRadius: 15, height: 90, borderTopRightRadius: 50, borderTopLeftRadius: 50 },],
      }} >
      <Tab.Screen name="NotificationStack" component={notificationStack} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name='home' color={focused ? '#047BD5' : 'black'} size={22} />
            <Text style={{ color: focused ? '#047BD5' : 'black' }}>Home</Text>
          </View>
        )
      }} />

      <Tab.Screen name='Polls' component={Polls} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons name='filter-variant' color={focused ? '#047BD5' : 'black'} size={22} />
            <Text style={{ color: focused ? '#047BD5' : 'black', textAlign: "center", fontFamily: "SourceSansPro-Regular" }}>Polls</Text>
          </View>
        )
      }}
      />

      <Tab.Screen name="CreatePro" component={CreateProfile} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name='person-outline' color={focused ? '#047BD5' : 'black'} size={22} />
            <Text style={{ color: focused ? '#047BD5' : 'black', textAlign: "center", fontFamily: "SourceSansPro-Regular" }}>Profile</Text>
          </View>
        )
      }}
      />



    </Tab.Navigator>
  )
}

export default Bottomtab

const styles = StyleSheet.create({})