import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

class Otp extends React.Component{
  state = {
    seconds: 30,
  }
  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds - 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  _onFulfill = code => {

  }

  handleOtpVerification = () => {
    if (this.props.prevScreen === 'forgotPassword') {
      Actions.confirmPassword();
    }
    else if(this.props.isUserRegisterd) {
      Actions.login();
    }
  }

  render(){
    const resendText = this.state.seconds > 0 ? `Resend in ${this.state.seconds} sec`: `Resend OTP`;
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
                  style={{height: 70, width: 90, marginTop: '5%',}}/>
              </View>
              <View style={styles.codeContainer}>
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
                  <Text style={styles.resendText}>{resendText}</Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.handleOtpVerification}>
                  <Text style={styles.verify}>VERIFY</Text>
                </TouchableOpacity>
              </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
  },
  codeContainer: {
    justifyContent: 'center',
    marginTop: '10%',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
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
    paddingHorizontal: '5%',
  },
  otpForm: {
    position: 'absolute',
    top: '-5%',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '105%',
    alignSelf: 'center',
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
    height: 50,
    width: '100%',
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
