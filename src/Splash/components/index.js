import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component<Props> {

  navigateToLoginPage = () => {
    Actions.login();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/background-image.png')}
          style={styles.backgroundImage}
          imageStyle={{
            width: '100%',
            height: '125%'
          }}
        >
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(49,34,34,.4)', 'rgba(0,0,0,0.75)']}
            style={styles.linearGradient}>
            <View style={styles.title}>
              <Image
                source={require('../../../assets/images/LOGO.png')}
                style={{height: 50, width: 83}}
              />
              <Text style={styles.welcomeText}>Welcome To Football Frenzy</Text>
            </View>

            {
              <View style={styles.links}>
                <View style={{marginTop: '20%'}}/>
                <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
                  <Text style={styles.buttonText}>{`Let's Play`}</Text>
                </TouchableOpacity>
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
          </LinearGradient>
        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  title: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 24,
    lineHeight: 26,
    paddingTop: '5%'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    height: 45,
    width: '100%',
    backgroundColor: '#0288D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  links: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
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
});
