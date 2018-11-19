import React, {Component} from 'react';
import {StyleSheet, Keyboard, View, Text, ImageBackground, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const condensedFont = Platform.OS === 'android'? 'd_dincondensed' : 'DIN Condensed'

export default class LoginScreen extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      showOptions: true
    }
  }

  navigateToRegistrationPage = () => {
    Actions.registration();
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
              <Text style={styles.loginText}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput}
              placeholder="Email or Mobile no"
              placeholderTextColor="#BDBDBD"/>
              <View style={styles.separator} />
              <TextInput style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#BDBDBD"/>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
                {
                  this.state.showOptions &&
                  <TouchableOpacity>
                    <Text style={styles.forgetPasswordStyle}>Forgot Password?</Text>
                  </TouchableOpacity>
                }
              </View>
            </View>
            {
              this.state.showOptions &&
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
                <TouchableOpacity style={styles.footerContainer} onPress={this.navigateToRegistrationPage}>
                  <Text style={styles.questionText}>Not a member ? </Text>
                  <Text style={styles.register}>Register</Text>
                </TouchableOpacity>
              </View>
            }

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
    justifyContent: 'space-between',
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
  forgetPasswordStyle: {
    textDecorationLine: 'underline',
    color: '#6C6C6C',
    fontFamily: 'Roboto',
    fontSize: 15,
    paddingTop: '5%',
  },
  optionsContainer: {
    flex: 0.4,
    justifyContent: 'space-around'
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
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: '2%',
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
