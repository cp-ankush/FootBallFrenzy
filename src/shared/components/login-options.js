import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginOptions = () => (
  <View style={styles.loginOptions}>
    <TouchableOpacity style={styles.optionButton}>
      <Image source={require('../../../assets/images/facebook-icon.png')}
      style={{width: 20, height: 20}}/>
      <Text style={[styles.optionText, styles.facebook]}>Facebook</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optionButton}>
    <Image source={require('../../../assets/images/google-icon.png')}
      style={{width: 20, height: 20}}/>
      <Text style={[styles.optionText, styles.google]}>Google</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  optionButton: {
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    backgroundColor: 'white',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  optionText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    paddingLeft: 10,
  },
  facebook: {
    color: '#3B5998',
  },
  google: {
    color: '#828282',
  },
})
export default LoginOptions;
