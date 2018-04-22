/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
var Spinner = require('react-native-spinkit');

const { height, width } = Dimensions.get('window')


export default class Onboards extends Component {

  static navigationOptions = ({ navigation }) => ({
    header:null,
  })

  componentDidMount(){
    setTimeout(() => {
      this.resetToHome()
    }, 5000);
  }

  resetToHome = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'TabDashboard' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode='contain' source={require('../../assets/onboard/logo.png')} style={{width: width / 3, height: 100}}/>
        <Text style={{color:'#fff', alignSelf: 'center', fontSize:10, marginTop:-25}}>Version 4.0.5</Text>
        <View style={{position:'absolute', bottom:10, left:0, width}}>
          <View style={{width, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Spinner style={{marginBottom: 10}} isVisible={true} size={20} type={'Circle'} color={'#fff'}/>
            <Text style={{color:'#fff', alignSelf: 'center', fontSize:10}}> Pemuatan</Text>
          </View>
          <Text style={{color:'#fff', alignSelf: 'center', fontSize:10}}>Foody Corporation</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b21d05'
  },
});
