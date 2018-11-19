import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  ImageBackground, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Platform, 
  Keyboard, 
  ScrollView 
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import LoginOptions from '../../shared/components/login-options';

const condensedFont = Platform.OS === 'android'? 'd_dincondensed' : 'DIN Condensed'

export default class RegistrationScreen extends Component<Props> {

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

  navigateToLoginPage = () => {
    Actions.login();
  }

  render(){
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
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
              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Register</Text>
              </View>
              <ScrollView style={{flex: 1}}>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.textInput}
                  placeholder="User Name"
                  placeholderTextColor="#BDBDBD"/>
                  <View style={styles.separator} />
                  <TextInput style={styles.textInput}
                  placeholder="Email Id"
                  placeholderTextColor="#BDBDBD"/>
                  <Text style={styles.subtitleText}>No spam. We promise!</Text>
                  <View style={styles.separator} />
                  <TextInput style={styles.textInput}
                  placeholder="Mobile No"
                  placeholderTextColor="#BDBDBD"/>
                  <Text style={styles.subtitleText}>You will recieve an OTP for verification</Text>
                  <View style={styles.separator} />
                  <TextInput style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"/>
                  <Text style={styles.subtitleText}>Minimum 8 characters with 1 number/symbol</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.register}>REGISTER</Text>
                    </TouchableOpacity>
                    <View style={styles.terms}>
                      <Text style={styles.termsStatement}>By registering, I agree to Football frenzy </Text>
                      <Text style={[styles.termsStatement,styles.termsLink]}> T&amp;Cs</Text>
                    </View>
                  </View>
                  {
                    this.state.showOptions &&
                    // <TouchableOpacity style={styles.footerContainer} onPress={this.navigateToLoginPage}>
                    //   <Text style={styles.questionText}>Already a user ?  </Text>
                    //   <Text style={styles.loginText}>Login</Text>
                    // </TouchableOpacity>
                    <View style={styles.options}>
                      <LoginOptions/>
                      <View style={styles.linkFooter}>
                        <View style={styles.textContainer}>
                          <Text style={styles.textQuestion}>Have a referal code ?</Text>
                          <Text style={styles.textLink}>Enter a code</Text>
                        </View>
                        <TouchableOpacity style={styles.textContainer} onPress={this.navigateToLoginPage}>
                          <Text style={[styles.textQuestion, styles.alignRight]}>Already a user?</Text>
                          <Text style={[styles.textLink, styles.alignRight]}>Log In</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
              </View>
            </ScrollView>
            </View>
          </View>
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textQuestion: {
    color: 'white',
    // fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 20,
    textAlign: 'left',
  },
  textQuestionRight: {
    color: 'white',
    // fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 20,
    textAlign: 'right',
  },
  textLink: {
    color: 'white',
    // fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'left'
  },
  alignRight: {
    textAlign: 'right'
  },
  linkFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 0.5,
    flexDirection: 'column',
    paddingVertical: '7%'
  },
  options: {
    flex: 0
  },
  termsLink: {
    color: '#0288D1'
  },
  termsStatement: {
    color: '#A2A2A2',
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'center',
  },
  terms: {
    flexDirection: 'row',
    paddingTop: '2%',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  registerContainer: {
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
    flex: 1, //0.69
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
    flex: 0.9,
    width: '100%',
    justifyContent: 'space-between',
  },
  registerText: {
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
    marginVertical: '10%',
    padding: '3%',
  },
  button: {
    height: 45,
    backgroundColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  register: {
    color: 'white',
    fontWeight: 'bold'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '7%',
  },
  questionText: {
    color: '#A2A2A2',
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  loginText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '600'
  },
  subtitleText: {
    color: '#7D7B7B',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15
  }
})
