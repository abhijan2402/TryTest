import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/commanheader'
import ActivityButton from '../../components/activitybutton'
import { NotificationData } from '../../utilites/ActivityData'
import NotificationBox from '../../components/notificationbox'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Notification = ({ navigation }) => {
    return (
        <View>
            <CommanHeader title={"Notifications"} UserProfile={true} />
            <ActivityButton onPress={() => { navigation.navigate("Activity") }} />
            <ScrollView >
                {
                    NotificationData.map((item, index) => (
                        <NotificationBox item={item} key={index} />
                    ))
                }
            </ScrollView>

        </View>
    )
}

export default Notification

const styles = StyleSheet.create({})