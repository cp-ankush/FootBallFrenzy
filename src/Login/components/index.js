import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component<Props> {
  render(){
    return (
    <View style={{flex: 1}}>
      <ImageBackground
          source={require('../../../assets/images/background-image.png')}
          style={{width: '100%', height: '100%', flex: 0.3}}>
            <LinearGradient
            locations={[0, 1]}
            colors={['rgba(49,34,34,.2)', 'rgba(0,0,0,0.65)']}
            style={styles.linearGradient}>
            <View style={styles.title}>
              <Image
                source={require('../../../assets/images/LOGO.png')}
                style={{height: 50, width: 83}}
              />
              </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.formContainer}>
            <View style={styles.form}>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                placeholder="Mobile no."
                placeholderTextColor="#BDBDBD"/>
                <TextInput style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#BDBDBD"/>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.login}>LOGIN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.forgetPasswordStyle}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.optionsContainer}>
                <Text style={styles.orHeading}>OR CONTINUE WITH</Text>
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
                <View style={styles.footerContainer}>
                  <Text style={styles.questionText}>Do you have an account ?  </Text>
                  <Text style={styles.register}>Register</Text>
                </View>
              </View>
            </View>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  loginContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 0.7,
    backgroundColor: '#E3E3E3',
    position: 'relative',
    padding: '3%'
  },
  form: {
    position: 'absolute',
    top: '-3%',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    paddingHorizontal: '6%',
    paddingVertical: '7%',
  },
  inputContainer: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'space-between'
  },
  loginText: {
    color: '#2A2A2A',
    // fontFamily: "DIN Condensed",
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 25,
  },
  textInput: {
    height: 40,
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: '7%',
    padding: '3%'
  },
  button: {
    height: 40,
    backgroundColor: '#0288D1',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  login: {
    color: 'white',
    fontWeight: '500'
  },
  forgetPasswordStyle: {
    textDecorationLine: 'underline',
    color: '#6C6C6C',
    fontFamily: 'Roboto',
    fontSize: 14,
    paddingVertical: '3%',
  },
  optionsContainer: {
    flex: 0.4,
    justifyContent: 'space-between'
  },
  orHeading: {
    color: '#A2A2A2',
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 13,
    textAlign: 'center',
    paddingTop: '4%',
  },
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  optionButton: {
    flexDirection: 'row', 
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
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  questionText: {
    color: '#A2A2A2',
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  register: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '600'
  }
})