import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const AlertBox = () => (
  Alert.alert(
    'Bet Now',
    'This Functionality is coming soon.',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
)

const _renderEventTitle = (title) => (
  <View>
    <Text style={styles.eventTitle}>{title}</Text>
  </View>
)

const Card = props => {
  if (props.data.title) {
    return _renderEventTitle(props.data.title);
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.upcomingMatches}>
          {`${props.data.name}\n${props.data.time}`}
        </Text>
        <TouchableOpacity onPress={AlertBox} style={styles.button}>
          <Text style={styles.buttonText}>Bet Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Image
             style={styles.teamImage}
             source={props.data.teamLogo1}
           />
          <Text style={styles.teamText}>{props.data.teamText1}</Text>
        </View>
        <View>
          <Image
             style={styles.vsStyle}
             source={require('../../../assets/images/VS.png')}
           />
        </View>
        <View style={styles.team}>
          <Image
             style={styles.teamImage}
             source={props.data.teamLogo2}
           />
          <Text style={styles.teamText}>{props.data.teamText2}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  upcomingMatches: {
    flex: 1,
    color: '#2A2A2A',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 25,
  },
  cardContainer: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  button: {
    height: 42,
    width: 100,
    backgroundColor: '#388E3C',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamText: {
    color: "#2A2A2A",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 10,
  },
  team: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  eventTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: '5%',
    paddingHorizontal: '2%',
  },
  teamImage: {
    width: 55, 
    height: 35,
  },
  vsStyle: {
    width: 35, 
    height: 55,
  },
});

export default Card
