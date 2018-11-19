import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

navigateToLoginPage = () => {
  Actions.login();
}

const LoginAndReferalLinks = ({ linkContainer, textContainer, textQuestion, textLink }) => (
  <View style={linkContainer}>
    <View style={textContainer}>
      <Text style={textQuestion}>Have a referal code ?</Text>
      <Text style={textLink}>Enter a code</Text>
    </View>
    <TouchableOpacity style={textContainer} onPress={navigateToLoginPage}>
      <Text style={[textQuestion, styles.alignRight]}>Already a user?</Text>
      <Text style={[textLink, styles.alignRight]}>Log In</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  alignRight: {
    textAlign: 'right'
  },
})
export default LoginAndReferalLinks;
