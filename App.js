import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import Landing from './src'
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            hidden={false}
            barStyle={"light-content"}
            backgroundColor = "#130F0D"/>
        <SafeAreaView style={styles.statusBarStyle}>
          <Landing />
       </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarStyle: {
    flex: 1,
    backgroundColor: "#130F0D"
  },
});
