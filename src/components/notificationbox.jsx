import { Dimensions } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const NotificationBox = ({ item }) => {
    return (
        <View style={styles.MainView}>
            <Image source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" }} style={styles.NotifImage} />
            <Text style={styles.NotifText}>{item.NotifMsg}</Text>
        </View>
    )
}

export default NotificationBox

const styles = StyleSheet.create({
    NotifImage: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    MainView: {
        marginHorizontal: 20,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    NotifText: {
        fontSize: 14,
        fontWeight: "400",
        color: "black",
        width: "85%",
        marginHorizontal: 10,
    }
})