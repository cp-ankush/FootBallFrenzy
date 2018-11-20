import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LiveEvents = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Coming Soon</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  textStyle: {
    color: 'white',
  }
})
export default LiveEvents;