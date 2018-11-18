import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import Landing from './src'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            hidden={false}
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
