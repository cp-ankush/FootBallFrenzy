import React from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import EntryFee from './components/entry-fee'
import Pay from './components/pay'
import { Actions } from 'react-native-router-flux';

export default class EntryFeeScreen extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: 'entryFee', title: 'ENTRY FEE' },
      { key: 'pay', title: 'PAY' },
    ],
  };

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBarStyle}
        labelStyle={styles.labelStyle}
      />
    );
  };
  
  _renderScene = () => (
    SceneMap({
      entryFee: EntryFee,
      pay: Pay
    })
  )

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
        source={require('../../assets/images/background-image.png')}
        style={{width: '100%', height: '100%', flex: 0.31}}
        >
          <LinearGradient
          locations={[0, 1]}
          colors={['rgba(49,34,34,.4)', 'rgba(0,0,0,0.5)']}
          style={styles.linearGradient}>
            <View style={styles.matchInfoContainer}>
              <TouchableOpacity onPress={()=> Actions.home()}>
                <Image
                  source={require('../../assets/images/back-icon.png')}
                  style={styles.backIcon}
                  />
              </TouchableOpacity>
              <View style={styles.matchInfo}>
                <Text style={styles.matchText}>{`${this.props.data.name}\n${this.props.data.time}`}</Text>
              </View>
            </View>
            <View style={styles.teamContainer}>
              <View style={styles.team}>
                <Image
                   style={styles.teamImage}
                   source={this.props.data.teamLogo1}
                 />
                <Text style={styles.teamText}>{this.props.data.teamText1}</Text>
              </View>
              <View>
                <Image
                   style={styles.vsStyle}
                   source={require('../../assets/images/vs-white.png')}
                 />
              </View>
              <View style={styles.team}>
                <Image
                   style={styles.teamImage}
                   source={this.props.data.teamLogo2}
                 />
                <Text style={styles.teamText}>{this.props.data.teamText2}</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={{flex: 0.69, backgroundColor: 'white'}}>
          <TabView
            navigationState={this.state}
            renderTabBar={this._renderTabBar}
            renderScene={this._renderScene()}
            onIndexChange={index => this.setState({ index })}
            canJumpToTab={() => (false)}
            swipeEnabled={false}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  matchInfoContainer: {
    flex: 0,
    paddingHorizontal: '5%',
    paddingTop: '3%',
  },
  matchInfo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIcon: {
    width: 15,
    height: 35
  },
  matchText: {
  	color: '#FFF',
  	fontFamily: 'Roboto',
  	fontSize: 20,
  	fontWeight: '500',
  	lineHeight: 30,
  	textAlign: 'center',
  },
  teamContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  teamText: {
    color: "white",
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
  teamImage: {
    width: 55,
    height: 35,
  },
  vsStyle: {
    width: 35,
    height: 55,
  },



  starLabelContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchesLabelContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchesLabelText: {
    color: 'white'
  },
  indicatorStyle: {
    backgroundColor: '#0078B1'
  },
  tabBarStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: '#FFF',
    borderBottomWidth: 0.5,
    borderColor: '#FFF'
  },
  labelStyle: {
    margin: '3%',
  	color: '#0078B1',
  	fontFamily: 'Roboto',
  	fontSize: 16,
    paddingTop: '2%',
  	fontWeight: '700',
  	lineHeight: 16,
  	textAlign: 'center',
  },
});
