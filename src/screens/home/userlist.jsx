import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/commanheader';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Userlist = () => {
    return (
        <View style={styles.MainView}>
            <CommanHeader title={"Users"} UserProfile={false} />
            <View style={styles.UserListMainView} >
                <View>
                    <Image source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" }} style={styles.UserImage} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.Name}>Riya Sharma</Text>
                    <Text style={styles.YOG}>Year Of Graduation 2016</Text>
                </View>
            </View>
            <View style={styles.UserListMainView} >
                <View>
                    <Image source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" }} style={styles.UserImage} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.Name}>Riya Sharma</Text>
                    <Text style={styles.YOG}>Year Of Graduation 2016</Text>
                </View>
            </View>
        </View>
    )
}

export default Userlist

const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    UserListMainView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 8

    },
    UserImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    Name: {
        fontSize: 15,
        fontWeight: "600",
        color: "black"
    },
    YOG: {
        fontSize: 13,
        fontWeight: "300"
    }
})