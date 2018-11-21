import React from 'react';
import {StyleSheet, View, FlatList, ImageBackground} from 'react-native';

import Card from '../../../shared/components/Card';
import { data } from '../../../utils/data';

const _keyExtractor = (item) => item.id;

const UpcomingEvents = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../../../../assets/images/background-image.png')}
      style={styles.backgroundImage}
      >
      <View style={styles.listContainer}>
        <View style={styles.seperator}/>
        <FlatList
          contentContainerStyle={styles.listStyle}
          data={data}
          renderItem={({item}) => <Card data={item} />}
          keyExtractor={_keyExtractor}
        />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: '2%'
  },
  listStyle: {
    paddingBottom: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  seperator: {
    marginTop: '5%'
  }
})
export default UpcomingEvents;
