import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import UpcomingEvents from './Matches/upcoming-events';
import PastEvents from './Matches/past-events';
import LiveEvents from './Matches/live-events';
import StarredEvents from './Matches/starred-events';
import Header from './Header'

export default class Home extends React.Component {

  state = {
    index: 1,
    routes: [
      { key: 'star', title: 'Star' },
      { key: 'upcoming', title: 'UPCOMING' },
      { key: 'past', title: 'PAST',  },
      { key: 'live', title: 'LIVE',  },
    ],
    isUserLoggedIn: this.props.user,
  };

  _renderStarLabel = () => (
    <View style={styles.starLabelContainer}>
      <Image source={require('../../../assets/images/star-icon.png')} style={styles.starIconStyles}/>
    </View>
  )

  _renderOtherLabel = ({route}) => (
    <View style={styles.matchesLabelContainer}>
      <Text style={styles.matchesLabelText}>{route.title}</Text>
    </View>
  )

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBarStyle}
        renderLabel={({ route }) => {
          if (route.title === 'Star') {
            return this._renderStarLabel()
          } else {
            return this._renderOtherLabel({route})
          }
        }}
        labelStyle={styles.labelStyle}
      />
    );
  };

  _renderScene = () => (
    SceneMap({
      star: StarredEvents,
      upcoming: UpcomingEvents,
      past: PastEvents,
      live: LiveEvents
    })
  )

  render() {
    return (
      <View style={styles.container}>
        <Header isUserLoggedIn={this.state.isUserLoggedIn}/>
        <TabView
          navigationState={this.state}
          renderTabBar={this._renderTabBar}
          renderScene={this._renderScene()}
          onIndexChange={index => this.setState({ index })}
          canJumpToTab={() => (this.state.isUserLoggedIn)}
          swipeEnabled={false}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
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
  starIconStyles: {
    width: 25,
    height: 25
  },
  indicatorStyle: {
    backgroundColor: '#FFF'
  },
  tabBarStyle: {
    backgroundColor: '#130F0D',
    borderBottomWidth: 0.5,
    borderColor: '#FFF'
  },
  labelStyle: {
    color: "#FFF"
  },
});
