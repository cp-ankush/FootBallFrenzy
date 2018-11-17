import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import SplashScreen from './Splash/components'

export default class Landing extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
