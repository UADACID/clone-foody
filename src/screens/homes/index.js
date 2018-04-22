/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base'

const { width, height } = Dimensions.get('window')

export default class Homes extends Component {

  renderItem = ({item}) => (
    <View style={{margin:8,width : width / 2.7, marginBottom: 15}}>
      <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLH4XC-BAF_YW_OZQJkJ6qYZW1ZNN-ezsAFTXf_ZjvC3n1F_NI'}}
        style={{width : width / 2.7 , height : width / 4, borderRadius:5 }}
      />
      <Text
        numberOfLines={1}
        style={{fontWeight:'bold', color:'#000'}}>The Barn - BSD City</Text>
      <Text
        numberOfLines={1}
        style={{fontSize:11}}>jalan stasiun tugu muda jogjakarta</Text>
    </View>
  )

  renderHorizontalList = ({title}) => {
    return (
      <View style={{backgroundColor:'#fff', borderTopWidth:7, borderColor:'#dddddd'}}>
        <View style={{width, flexDirection:'row', justifyContent:'space-between', padding: 10}}>
          <Text style={{fontWeight:'bold', color:'#000'}}>{title}</Text>
          <Text style={{color:'#000'}}>Lihat lebih lanjut <Text style={{color:'gray'}}>></Text></Text>
        </View>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}]}
          horizontal={true}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderSearch = () => {
    return (
      <View style={{flexDirection:'row', width : width - 20, height : 45, borderRadius: 3, borderColor: '#f0eeee', borderWidth:1, marginLeft: 10, marginBottom: 35, alignItems:'center', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Icon name='ios-search-outline' style={{fontSize : 20, color : 'gray', marginLeft: 10, marginRight: 5}}/>
          <TextInput
            style={{width : (width / 2) - 15}}
            placeholder='Cari nama restoran...'
            underlineColorAndroid='#fff'
            placeholderTextColor='gray'/>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{color:'#787878', marginRight : 5}}>Jakarta</Text>
          <View style={{margin:5, borderLeftWidth:1, borderColor: '#f0eeee'}}>
            <Image
              source={require('../../assets/dashboard/target.png')}
              style={{width : 20, height : 20, marginLeft : 10}}
            />
          </View>
        </View>
      </View>
    )
  }

  renderHeader = () => {
      return (
        <View>
          <Image
            source={require('../../assets/dashboard/header.png')}
            style={{width, height : height / 3}}
          />
          <View style={{backgroundColor:'#fff'}}>
            {this.renderSearch()}
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'#fff', paddingBottom: 20}}>
              <TouchableOpacity  style={{justifyContent:'center', alignItems:'center'}}>
              <Image
                source={require('../../assets/dashboard/logo-discovery.png')}
                style={{width : width / 4 , height : width / 4 }}
              />
              <Text style={{fontWeight:'bold', color:'#000'}}>Discovery</Text>
              </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
              <Image
                source={require('../../assets/dashboard/logo-voucher.png')}
                style={{width : width / 4 , height : width / 4 }}
              />
              <Text style={{fontWeight:'bold', color:'#000'}}>Voucher</Text>
            </TouchableOpacity>
          </View>
            {this.renderHorizontalList({title:'Terdekat'})}
            {this.renderHorizontalList({title:'Aktivitas Terbaru'})}
        </View>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={[]}
        ListHeaderComponent={this.renderHeader}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
