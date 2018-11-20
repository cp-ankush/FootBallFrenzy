import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LandingScreen from './LandingScreen/components';
import LoginScreen from './Login/components';
import RegistrationScreen from './Registration/components';

export default class Landing extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="landing" component={LandingScreen} initial hideNavBar/>
          <Scene key="login" component={LoginScreen}  hideNavBar/>
          <Scene key="registration" component={RegistrationScreen} hideNavBar/>
        </Stack>
      </Router>
    );
  }
}
