import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';

const data = [{
  text: 'Home',
  icon: require('../../../../assets/images/home-icon.png'),
  width: 30,
  height: 30,
  padding: '2%',
  active: true,
  navigate: 'home'
},
{
  text: 'Tickets',
  icon: require('../../../../assets/images/side-ticket-icon.png'),
  width: 30,
  height: 30,
  padding: '1%',
  active: false,
  navigate: 'home'
},
{
  text: 'FAQ',
  icon: require('../../../../assets/images/faq-icon.png'),
  width: 30,
  height: 30,
  padding: '1%',
  active: false,
  navigate: 'home'
},
{
  text: 'Help & Support',
  icon: require('../../../../assets/images/help-icon.png'),
  width: 30,
  height: 30,
  padding: '1%',
  active: false,
  navigate: 'home'
},
{
  text: `How it's work`,
  icon: require('../../../../assets/images/work-icon.png'),
  width: 30,
  height: 30,
  padding: '0%',
  active: false,
  navigate: 'home'
},
{
  text: 'Logout',
  icon: require('../../../../assets/images/logout-icon.png'),
  width: 18.7,
  height: 22,
  padding: '1%',
  active: false,
  navigate: 'login'
}]

export default class ControlPanel extends Component {

  renderDrawerItem = ({item, index}) => (
    <TouchableOpacity style={styles.itemContainer} key={index} onPress={() => {Actions[item.navigate]()}}>
      <View style={styles.itemImageContainer}>
        <Image source={item.icon} style={{width: item.width, height: item.height}} />
      </View>
      <View style={[styles.itemTextContainer, {padding: item.padding}]}>
        <Text style={[styles.itemText, (item.active? styles.active: null)]}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <ImageBackground
            source={require('../../../../assets/images/side-view-background.png')}
            style={styles.backgroundImage}
          >
            <View style={styles.profileData}>
              <Image
                source={require('../../../../assets/images/profile.png')}
                style={styles.profileImage}
              />
              <View style={styles.profileText}>
                <View>
                  <Text style={styles.name}>{`John Doe`}</Text>
                  <Text style={styles.email}>{`johndoe@gmail.com`}</Text>
                </View>
                <Image
                  source={require('../../../../assets/images/settings.png')}
                  style={styles.settingIcon}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {
            data.map((item, index) => {
              return this.renderDrawerItem({item, index})
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    flex: 0.4,
  },
  profileData: {
    flex: 1,
    padding: '5%'
  },
  profileImage: {
    width: 70,
    height: 70
  },
  profileText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  settingIcon: {
    width: 30,
    height: 30
  },
  scrollContainer: {
    flex: 0.6,
    paddingHorizontal: '5%',
  },
  itemImageContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
  	color: '#FFF',
  	fontFamily: 'Roboto',
  	fontSize: 18,
  	fontWeight: '700',
  	lineHeight: 24,
  },
  email: {
  	color: '#FFF',
  	fontFamily: 'Roboto',
  	fontSize: 18,
  	lineHeight: 24,
  },
  itemText: {
    color: '#2A2A2A',
  	fontFamily: 'Roboto',
  	fontSize: 18,
  	fontWeight: '700',
  	lineHeight: 18,
    paddingLeft: '7%',
  },
  itemContainer: {
    flex: 0,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemTextContainer: {
    flex: 0.85,
    justifyContent: 'center'
  },
  active: {
    color: '#388E3C',
  },
});
