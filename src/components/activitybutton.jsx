import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActivityButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.MainView} onPress={onPress}>
            <Text style={styles.BtnText}>ActivityButton</Text>
            <Image source={require('../assests/next.png')} style={styles.NavigateBtn} />
        </TouchableOpacity>
    )
}

export default ActivityButton

const styles = StyleSheet.create({
    NavigateBtn: {
        width: 30,
        height: 30
    },
    MainView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        backgroundColor: "#9EA3F5",
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 12,
        marginVertical: 10
    },
    BtnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        width: "90%"
    }
})