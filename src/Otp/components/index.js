import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import LinearGradient from 'react-native-linear-gradient';

class Otp extends React.Component{
  _onFulfill = code => {

  }
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/background-image.png')}
          style={{width: '100%', height: '100%', flex: 0.31}}
          imageStyle={{
            width: '105%',
            height: '130%'
          }}
          >
            <LinearGradient
            locations={[0, 1]}
            colors={['rgba(49,34,34,.4)', 'rgba(0,0,0,0.5)']}
            style={styles.linearGradient}>
              <View style={styles.title}>
                <Image
                  source={require('../../../assets/images/LOGO.png')}
                  style={{height: 60, width: 100}}
                />
              </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.formContainer}>
            <View style={styles.otpForm}>
              <View style={styles.imageContainer}>
                <Text style={styles.otp_verification}>OTP Verification</Text>
                <Image                  
                  source={require('../../../assets/images/otp_image.png')}
                  style={{height: 70, width: 90 }}/>
              </View>
              <Text style={styles.otp_content}>{`OTP has been sent to your \nmobile number. Please verify`}</Text>
              <View>
              <CodeInput 
                codeLength={4}
                inputPosition='center'
                size={40}
                keyboardType="numeric"
                activeColor='#3E3E3E'
                inactiveColor='#3E3E3E'
                className="border-b"
                autoFocus={false}
                onFulfill={(code) => this._onFulfill(code)}
                containerStyle={{height: 60, padding: 0, margin: 0, flex: 0}}
              />
              <Text style={styles.resendText}>Resend in 30 sec</Text>
              </View>
          </View>
          <View style={styles.button}>
            <Text style={styles.verify}>VERIFY</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  formContainer: {
    flex: 0.69,
    backgroundColor: '#E3E3E3',
    position: 'relative',
    paddingHorizontal: '3%',
    paddingTop: '3%',
  },
  otpForm: {
    position: 'absolute',
    top: '-5%',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '105%',
    alignSelf: 'center',
    paddingHorizontal: '6%',
    paddingTop: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  otp_verification: {
    color: '#2A2A2A',
    // fontFamily: "DIN Condensed";
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  otp_content: {
    color: '#3E3E3E',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
  },
  resendText: {
    color: '#0084D8',
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0288D1',
    height: 40,
    width: '100%',
    alignSelf: 'flex-start',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  verify: {
    color: '#FFF',
    fontFamily: 'Roboto',	
    fontSize: 15,	
    fontWeight: '700',
    textAlign: 'center',
  },
})
export default Otp;