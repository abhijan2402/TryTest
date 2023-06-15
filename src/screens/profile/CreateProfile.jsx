import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ProfileUser from '../../components/profileuser';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const CreateProfile = () => {
    return (
        <View style={styles.MainView}>
            <View style={styles.ProfileDescrip}>
                <Text style={styles.ProfileDescripText}>Didn't realise how amazing they are gscy dcuidhcui wcbwecbw fuyewbuywebwyb</Text>
            </View>
            <View style={{ marginTop: "10%" }}>
                <ProfileUser name="Ankur T" />
                <ProfileUser name="Ankur T" />
                <ProfileUser name="Ankur T" />


            </View>
            <TouchableOpacity style={styles.ShuffleBtn}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2550/2550084.png" }} style={styles.ShuffleIcon} />
                <Text style={styles.ShuffleBtnText}>Shuffle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateProfile

const styles = StyleSheet.create({
    MainView: {
        backgroundColor: "#9EA3F5",
        height: windoHeight
    },
    ProfileDescrip: {
        width: windoWidth,
        marginTop: "20%",
        paddingHorizontal: 25,
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
    },
    ProfileDescripText: {
        fontSize: 24,
        fontWeight: "700",
        color: "white",
        fontFamily: "Montserrat"
    },
    ShuffleBtn: {
        marginHorizontal: 55,
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