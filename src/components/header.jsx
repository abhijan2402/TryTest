import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Antdesign from 'react-native-vector-icons/AntDesign'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      {/* <Antdesign name='arrowleft' size={30} /> */}
      <Image
        style={styles.icon}
        source={require('../assests/chevron-left-solid.png')}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 26,
    alignItems: 'center',
  },

  icon: {
    width: 25,
    height: 25,
    opacity: 0.7,
    marginRight: 24,
  },

  title: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,

    color: '#344457',
  },
});
