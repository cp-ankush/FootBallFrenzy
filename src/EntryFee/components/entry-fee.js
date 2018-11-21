import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

const _keyExtractor = (item) => item.id;

const ticketData = [{
  price: '$1.00',
  id: 1
}, {
  price: '$5.00',
  id: 2,
},{
  price: '$10.00',
  id: 3,
},{
  price: '$25.00',
  id: 4,
},{
  price: '$50.00',
  id: 5,
}]

class EntryFee extends React.Component{
  state = {
    data: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
      {id: 5, value: 0}
    ]
  }
  handleDecrease = (id) => {
    //if(this.state.data){
      this.setState({
        data: [...this.state.data, {id, value: this.state.data[id - 1].value - 1}]
      })
    //}
  }
  handleIncrease = (id) => {
    this.setState({
      data: [...this.state.data, {id, value: this.state.data[id - 1].value + 1}]
    })
  }
  renderEntryPass = ({item, index}) => (
    <View style={styles.ticketItemContainer} key={index}>
      <View style={styles.itemLeft}>
        <Image source={require('../../../assets/images/ticket-entry-pass.png')} style={styles.ticketImage} />
        <Text style={styles.priceText}>
          {item.price} Entry
        </Text>
      </View>
      <View style={styles.itemRight}>
        <View style={styles.itemCount}>
          <TouchableOpacity style={[styles.countText, styles.countMinus]} onPress={() => this.handleDecrease(item.id)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{this.state.data[index].value}</Text>
          <TouchableOpacity style={styles.countText} onPress={() => this.handleIncrease(item.id)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.itemPrice}>$0.00</Text>
        </View>
      </View>
    </View>
  );

  render(){
    return (
    <View style={styles.container}>
      <View style={styles.ticketsContainer}>
        <TouchableOpacity style={[styles.button, styles.prizeButton]}>
          <Text style={styles.buttonText}>YOU CAN WIN PRIZE MONEY UPTO $ 1000</Text>
        </TouchableOpacity>
        <ScrollView style={{flex: 1}}>
        {
          ticketData.map((item, index) => {
            return this.renderEntryPass({item, index})
          })
        }
        </ScrollView>
      </View>
      <View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>TOTAL PAYABLE AMOUNT:</Text>
          <Text style={styles.totalPrice}>$87.00</Text>
        </View>
        <TouchableOpacity style={[styles.button, styles.payButton]} onPress={Actions.login}>
          <Text style={styles.buttonText}>PROCEED TO PAY</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  totalContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalPrice: {
  	color: '#008614',
  	fontFamily: 'Roboto',
  	fontSize: 18,
  	fontWeight: '700',
  	lineHeight: 21,
  },
  totalText: {
  	color: '#2A2A2A',
  	fontFamily: 'Roboto',
  	fontSize: 14,
  	fontWeight: '700',
  	lineHeight: 14,
  	textAlign: 'center',
  },
  ticketsContainer: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingTop: '4%',
    justifyContent: 'space-between'
  },
  ticketItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '3%'
  },
  ticketImage: {
    width: 30,
    height: 30
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.6
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5
  },
  itemCount: {
  	height: 30,
  	width: 95,
    borderColor: '#ACACAC',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  countMinus: {
    color: '#2A2A2A'
  },
  countText: {
  	color: '#008203',
  	fontFamily: 'Roboto',
  	fontSize: 16,
  	fontWeight: '500',
  	lineHeight: 19,
  },
  itemPrice: {
  	color: '#008614',
  	fontFamily: 'Roboto',
  	fontSize: 16,
  	fontWeight: '500',
    width: 80,
    flexWrap: 'wrap',
    textAlign: 'right'
  },
  priceText: {
  	color: '#2A2A2A',
  	fontFamily: 'Roboto',
  	fontSize: 16,
  	fontWeight: '500',
  	lineHeight: 16,
  },
  button: {
    height: 45,
    backgroundColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  prizeButton: {
    flex: 0,
    borderRadius: 3
  },
  payButton: {
    backgroundColor: '#0288D1',
    height: 50,
  },
  buttonText: {
  	color: '#FFF',
  	fontFamily: 'Roboto',
  	fontSize: 16,
  	fontWeight: '500',
  	lineHeight: 16,
  	textAlign: 'center',
  },
})
export default EntryFee;
