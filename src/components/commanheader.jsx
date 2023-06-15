import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const CommanHeader = ({ title, UserProfile }) => {
    return (
        <View style={styles.MainView}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2985/2985161.png" }} style={styles.BackArrow} />
            <Text style={styles.HeaderTitle}> {title}</Text>
            {
                UserProfile ?
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2118/2118701.png" }} style={styles.group} /> : null
            }
        </View>

    )
}

export default CommanHeader

const styles = StyleSheet.create({
    MainView: {
        height: windoHeight / 15,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
    },
    BackArrow: {
        width: 25,
        height: 25,
    },
    HeaderTitle: {
        fontSize: 20,
        fontWeight: "400",
        color: "black",
        marginHorizontal: 5,
        width: "80%"
    },
    group: {
        width: 30,
        height: 30
    }
})