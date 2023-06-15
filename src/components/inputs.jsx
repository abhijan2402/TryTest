import {Dimensions, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const Inputs = ({placeholder}) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    width: width - 52,
    paddingHorizontal: 23,
    paddingVertical: 13,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 24,
    marginHorizontal: 26,
  },
});
