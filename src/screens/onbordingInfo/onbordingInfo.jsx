import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const OnbordingInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{height: height - 24, width}}>
            <ImageBackground
              resizeMode="stretch"
              style={{height: height - height / 2.5, width: width}}
              source={require('../../assests/onbording1.png')}></ImageBackground>
            <Text style={styles.heading}>
              Yasss! Your profile is ready to slay!🔥{' '}
            </Text>
            <Text style={styles.para}>
              Say goodbye to ordinary social media and embrace a world of
              compliments and genuine moments
            </Text>
          </View>
        </ScrollView>

        <View style={{position: 'absolute', flexDirection: 'row', bottom: 25, left: 26}}>
            <View style={[styles.circle, {width: 20.89, backgroundColor: '#A0A0A0'}]} />
            <View style={styles.circle} />
            <View style={styles.circle} />
        </View>
      </View>
      <View style={styles.bottomTab}>
        <Image
          style={{width: 30, height: 20}}
          source={require('../../assests/Arrow2.png')}
        />
      </View>
    </View>
  );
};

export default OnbordingInfo;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#fff',
    position: 'relative',
  },

  bottomTab: {
    backgroundColor: '#9EA3F5',
    position: 'absolute',
    right: 0,
    bottom: 24,
    width: 167.5,
    height: 88,
    borderTopLeftRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 1,
    paddingHorizontal: 26,
    paddingBottom: 30,
    color: '#9EA3F5',
  },

  para: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    paddingHorizontal: 26,
    color: ' #C0C0C0',
  },

  circle: {
    height: 7,
    width: 7,
    backgroundColor: '#BBBBBB',
    marginRight: 10,
    borderRadius: 999
  }
});
