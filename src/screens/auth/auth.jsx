import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BG from '../../assests/Rectangle.png';
import Button from '../../components/button';
import Inputs from '../../components/inputs';

const { height, width } = Dimensions.get('window');

const Auth = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <SafeAreaView style={styles.container}>

          <ImageBackground
            resizeMode="stretch"
            source={BG}
            style={styles.welcomeSection}>
            <Text style={styles.heading}>
              Welcome to <Text style={{ color: '#9EA3F5' }}>TrueMates</Text>
            </Text>

            <Text style={styles.para}>
              Imagine a secret club, but instead of a secret handshake, you need
              an organization email to join this dope network.
            </Text>
          </ImageBackground>
          <View style={styles.loginSection}>
            <Text style={styles.authHeading}>Sign Up /Log In</Text>

            <Inputs placeholder="Email" />
            <Button title={'Continue'} onPress={() => { navigation.navigate("OTP") }} />
            <Text style={styles.or}>Or</Text>


          </View>
          <TouchableOpacity style={styles.googleBtn}>
            <Image style={styles.googleIcon} source={{ uri: 'https://img.freepik.com/free-icon/google_318-278809.jpg' }} />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    // flex: 1,
    backgroundColor: '#fff',
  },

  welcomeSection: {
    height: height / 2,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 26,
  },

  heading: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,

    color: '#FFFFFF',
  },

  para: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',

    color: '#344457',
  },

  loginSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  authHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 26,
    color: '#344457',
    marginBottom: 35
  },

  or: {
    paddingTop: 23,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#344457',
  },

  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 52,
    marginHorizontal: 26,
    elevation: 5,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 10
  },

  googleIcon: {
    width: 35,
    height: 35,
    marginRight: 20
  },

  googleText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#000'
  }
});
