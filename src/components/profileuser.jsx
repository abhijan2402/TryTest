import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileUser = ({ name }) => {
    return (
        <View style={styles.MainView}>
            <View style={styles.UserProfileImageView}>
                <Image source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" }} style={styles.UserImage} />
            </View>
            <View style={styles.TextView}>
                <Text style={styles.Name}>{name}</Text>
            </View>
        </View>
    )
}

export default ProfileUser

const styles = StyleSheet.create({
    MainView: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 15
    },
    UserProfileImageView: {
        marginLeft: "5%"
    },
    UserImage: {
        width: 51,
        height: 51,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "white"
    },
    TextView: {
        width: "70%",
        marginLeft: '4%',
        backgroundColor: 'white',
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    Name: {
        fontSize: 15,
        fontWeight: "700",
        color: "black"
    }
})