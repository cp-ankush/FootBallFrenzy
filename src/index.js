import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LandingScreen from './LandingScreen/components';
import LoginScreen from './Login/components';
import RegistrationScreen from './Registration/components';
import OtpScreen from './Otp/components';
import ForgotPasswordScreen from './ForgotPassword/components';
import ConfirmPasswordScreen from './ForgotPassword/components/confirmPassword';
import Home from './Home/components';

export default class Landing extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="landing" component={LandingScreen} initial hideNavBar/>
          <Scene key="login" component={LoginScreen} hideNavBar/>
          <Scene key="registration" component={RegistrationScreen} hideNavBar/>
          <Scene key="otp" component={OtpScreen} hideNavBar/>
          <Scene key="forgotPassword" component={ForgotPasswordScreen}  hideNavBar/>
          <Scene key="confirmPassword" component={ConfirmPasswordScreen}  hideNavBar/>
          <Scene key="home" component={Home} initial hideNavBar/>
        </Stack>
      </Router>
    );
  }
}
