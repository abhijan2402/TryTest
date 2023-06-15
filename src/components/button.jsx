import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#9EA3F5',
    borderRadius: 10,
    width: width - 52,
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 13,
    marginHorizontal: 26,
  },

  btnTxt: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
})