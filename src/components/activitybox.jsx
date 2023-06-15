import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActivityBox = ({ item }) => {
    return (
        <View style={styles.MainView}>
            <Image source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" }} style={styles.profileImage} />
            <Text style={styles.Title}>{item.title}</Text>
        </View>
    )
}

export default ActivityBox

const styles = StyleSheet.create({
    MainView: {
        marginHorizontal: 20,
        paddingVertical: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#9EA3F5",
        borderRadius: 16,
        marginVertical: 8
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 12,
        marginLeft: "2%",
        marginVertical: "1%"
    },
    Title: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        marginHorizontal: 15
    }
})