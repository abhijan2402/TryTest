import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/commanheader'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Preview = () => {
    return (
        <View style={styles.MainView}>
            <CommanHeader title="Preview" UserProfile={false} />
            <View style={styles.PreviewMainView}>
                <Text style={styles.PreviewText}>This person's energy is infectious. Love 'em to bits!</Text>
                <Image source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" }} style={styles.PrevireUserImage} />
            </View>
            <TouchableOpacity style={styles.ShuffleBtn}>
                <Image source={{ uri: "https://cdn.icon-icons.com/icons2/2249/PNG/512/camera_retake_outline_icon_139052.png" }} style={styles.ShuffleIcon} />
                <Text style={styles.ShuffleBtnText}>Retake</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Preview

const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    PreviewMainView: {
        borderWidth: 1,
        marginHorizontal: 20,
        elevation: 30,
        shadowColor: "grey",
        backgroundColor: "white",
        borderRadius: 12,
        marginTop: "10%"
    },
    PrevireUserImage: {
        height: windoHeight / 2,
        borderWidth: 2,
        borderRadius: 12,
        margin: 5,
        borderColor: "white",
        elevation: 12,
        shadowColor: "grey"
    },
    PreviewText: {
        fontSize: 13,
        fontWeight: "600",
        backgroundColor: "#9EA3F5",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginHorizontal: 5,
        borderRadius: 8,
        marginVertical: 5
    },
    ShuffleBtn: {
        marginHorizontal: 85,
        borderWidth: 1,
        borderRadius: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        marginTop: "7%"
    },
    ShuffleBtnText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    ShuffleIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 5
    }
})