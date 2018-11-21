import React from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground, Image} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import UpcomingEvents from './Matches/upcoming-events';
import PastEvents from './Matches/past-events';
import LiveEvents from './Matches/live-events';
import Header from './Header'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, },
  main: {paddingLeft: 3},
}

export default class Home extends React.Component {

  state = {
    index: 1,
    routes: [
      { key: 'star', title: 'Star' },
      { key: 'upcoming', title: 'UPCOMING' },
      { key: 'past', title: 'PAST',  },
      { key: 'live', title: 'LIVE',  },
    ],
  };

  _renderStarLabel = () => (
    <View style={styles.starLabelContainer}>
      <Image source={require('../../../assets/images/star-icon.png')} style={styles.starIconStyles}/>
    </View>
  )

  _renderOtherLabel = ({route, focused}) => (
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
        renderLabel={({ route, focused }) => {
          if (route.title === 'Star') {
            return this._renderStarLabel()
          } else {
            return this._renderOtherLabel({route, focused})
          }
        }}
        labelStyle={styles.labelStyle}
      />
    );
  };

  _renderScene = () => (
    SceneMap({
      star: UpcomingEvents,
      upcoming: UpcomingEvents,
      past: PastEvents,
      live: LiveEvents
    })
  )

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        open={true}
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
        <View style={styles.container}>
          <Header
            openControlPanel={this.openControlPanel}
            />
          <TabView
            navigationState={this.state}
            renderTabBar={this._renderTabBar}
            renderScene={this._renderScene()}
            onIndexChange={index => this.setState({ index })}
            canJumpToTab={() => (false)}
            swipeEnabled={false}
          />
      </View>
    </Drawer>
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
