import {
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import Button from '../../components/button';
import Inputs from '../../components/inputs';
const { width, height } = Dimensions.get('window');

const OTP = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <SafeAreaView style={{ minHeight: height - 25 }}>
          <Header title={'Verification code'} />

          <View style={styles.container}>
            <Text style={styles.para}>
              Enter Verification code that we sent you through e-mail
            </Text>

            <Text style={styles.label}>Enter Verification code</Text>
            <Inputs placeholder="Email" />

            <Button title={'Submit'} />

            <Text style={styles.otp}>
              Resend code <Text style={{ color: '#344457' }}>12</Text>
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height / 13,
  },

  para: {
    paddingHorizontal: 26,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#344457',
    paddingBottom: 24,
  },

  label: {
    paddingHorizontal: 26,
    paddingBottom: 12,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: '#344457',
  },

  otp: {
    paddingHorizontal: 26,
    paddingTop: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#9EA3F5',
  },
});
