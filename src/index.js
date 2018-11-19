import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import SplashScreen from './Splash/components';
import LoginScreen from './Login/components';
import RegistrationScreen from './Registration/components';

export default class Landing extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splash" component={SplashScreen} hideNavBar/>
          <Scene key="login" component={LoginScreen}  hideNavBar/>
          <Scene key="registration" component={RegistrationScreen} initial hideNavBar/>
        </Stack>
      </Router>
    );
  }
}
