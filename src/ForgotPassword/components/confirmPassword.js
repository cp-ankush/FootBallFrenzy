import React, {Component} from 'react';
import {StyleSheet, Keyboard, View, Text, ImageBackground, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import LoginOptions from '../../shared/components/login-options';

const condensedFont = Platform.OS === 'android'? 'd_dincondensed' : 'DIN Condensed'

export default class ConfirmPasswordScreen extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      showOptions: true
    }
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      showOptions: false
    })
  }

  _keyboardDidHide = () => {
    this.setState({
      showOptions: true
    })
  }

  navigateToLoginScreen = () => {
    Actions.login();
  }

  render(){
    return (
      <View style={{flex: 1}}>
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
          {
            this.state.showOptions &&
            <View style={styles.title}>
              <Image
                source={require('../../../assets/images/LOGO.png')}
                style={{height: 60, width: 100}}
              />
            </View>
          }
          </LinearGradient>
        </ImageBackground>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>RESET PASSWORD</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput}
              placeholder="New Password"
              placeholderTextColor="#BDBDBD"/>
              <View style={styles.separator} />
              <TextInput style={styles.textInput}
              placeholder="Confirm Password"
              placeholderTextColor="#BDBDBD"/>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.navigateToLoginScreen}>
                  <Text style={styles.login}>SUBMIT</Text>
                </TouchableOpacity>
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
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
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
  form: {
    position: 'absolute',
    top: '-5%',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '105%',
    alignSelf: 'center',
    paddingHorizontal: '6%',
    paddingTop: '5%',
  },
  inputContainer: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#2A2A2A',
    fontFamily: condensedFont,
    fontSize: 31,
    fontWeight: '700',
  },
  textInput: {
    marginTop: "4%",
    height: 40,
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: 17,
    lineHeight: 18,
    borderBottomColor: "rgb(150, 150, 150)",
    borderBottomWidth: 1,
  },
  separator: {
    margin: "2%",
  },
  buttonContainer: {
    marginTop: '7%',
    padding: '3%'
  },
  button: {
    height: 45,
    backgroundColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  login: {
    color: 'white',
    fontWeight: 'bold'
  },
})
