/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { height, width } = Dimensions.get('window')
const TITLE_TOP_POSITION = (height / 2) / 4

export default class ChooseLanguages extends Component {

  static navigationOptions = ({ navigation }) => ({
    header:null,
  })

  state = {
    choosed : 'id'
  }

  onChoose = (lang) => {
    this.setState({
      choosed : lang
    })
  }

  render() {
    const { choosed } = this.state
    const renderChecked = <Image source={require('../../assets/chooseLanguage/check.png')} style={{height:20, width: 20, marginLeft:20}} />
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', top:TITLE_TOP_POSITION, left:0, width}}>
          <Text
            style={{color:'#fff', alignSelf: 'center',}}>
            Please choose your language
          </Text>
        </View>
        <View style={{backgroundColor:'#fff', margin:15, borderRadius:3}}>
          <TouchableOpacity
            onPress={()=>this.onChoose('id')}
            style={{flexDirection:'row', height:60, width:width - 30, justifyContent:'center', alignItems:'center', borderBottomWidth:.5, borderColor:'#f0eeee'}}>
            <Text style={{color:'#2a8ff1', fontWeight:'bold'}}>Bahasa Indonesia</Text>
            {choosed == 'id' ? renderChecked : false}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.onChoose('eng')}
            style={{flexDirection:'row', height:60, width:width - 30, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#2a8ff1', fontWeight:'bold'}}>English</Text>
            {choosed == 'eng' ? renderChecked : false}
          </TouchableOpacity>
        </View>
        <View style={{position:'absolute', bottom:TITLE_TOP_POSITION, left:20, width}}>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('OnBoards')}
            style={{backgroundColor:'#fff', height:40, width:width - 40, justifyContent:'center', alignItems:'center', borderBottomWidth:.5, borderRadius:2}}>
            <Text style={{color:'#676767'}}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={{position:'absolute', bottom:10, left:0, width}}>
            <Text style={{color:'#fff', alignSelf: 'center', fontSize:10}}>Version 4.0.5</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b21d05',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
