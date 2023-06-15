import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CommanHeader from '../../components/commanheader';
import { ActivityData } from '../../utilites/ActivityData';
import ActivityBox from '../../components/activitybox';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Activity = () => {
    return (
        <View style={styles.MainView}>
            <CommanHeader title={"Activity"} UserProfile={false} />
            <ScrollView>
                {
                    ActivityData.map((item, index) => (
                        <ActivityBox item={item} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    }
})