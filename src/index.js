import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import SplashScreen from './Splash/components';
import LoginScreen from './Login/components';
import RegistrationScreen from './Registration/components';
import OtpScreen from './Otp/components';
import Home from './Home/components';
export default class Landing extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splash" component={SplashScreen} initial hideNavBar/>
          <Scene key="login" component={LoginScreen}  hideNavBar/>
          <Scene key="registration" component={RegistrationScreen} hideNavBar/>
          <Scene key="otp" component={OtpScreen} hideNavBar/>
          <Scene key="home" component={Home} hideNavBar/>
        </Stack>
      </Router>
    );
  }
}
