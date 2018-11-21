import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgArr = [
  require('../../../assets/images/avatar/3.png'),
  require('../../../assets/images/avatar/4.png'),
  require('../../../assets/images/avatar/5.png'),
  require('../../../assets/images/avatar/6.png'),
  require('../../../assets/images/avatar/7.png'),
  require('../../../assets/images/avatar/8.png'),
];

const AvatarList = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Select Avatar</Text>
    <View style={styles.avatarContainer}>
      {imgArr.map((image) => (
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={image} style={styles.image}/>
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity style={styles.button} onPress={() => Actions.otp({isUserRegisterd: true})}>
      <Text style={styles.continue}>Continue</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 19,
    textAlign: 'center',
    paddingTop: '5%',
  },
  avatarContainer: {
    flex: 0,
    margin: '4%',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20 ,
  },
  imageContainer: {
    width: '40%', 
    height: 182,
  },
  image: { 
    width: '100%', 
    height: '100%'
  },
  button: {
    backgroundColor: '#0288D1',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  continue: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default AvatarList;