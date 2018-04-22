import React from 'react'
import { Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import ChooseLanguages from '../screens/chooseLanguages'
import OnBoards from '../screens/onBoards'
import Homes from '../screens/homes'
import Saveds from '../screens/saveds'
import Vouchers from '../screens/vouchers'
import Notifications from '../screens/notifications'
import Accounts from '../screens/accounts'


const TabDashboard = TabNavigator({
  Homes : {
    screen : Homes,
    navigationOptions: ({ navigation }) => ({
      header:null,
      tabBarIcon: ({ focused, tintColor }) => {
        const path = focused ? require('../assets/dashboard/home-active.png') : require('../assets/dashboard/home.png')
        return <Image source={path} style={{height:20, width:20}}/>;
      },
    })
  },
  Saveds : {
    screen : Saveds,
    navigationOptions: ({ navigation }) => ({
      header:null,
      tabBarIcon: ({ focused, tintColor }) => {
        const path = focused ? require('../assets/dashboard/saved-active.png') : require('../assets/dashboard/saved.png')
        return <Image source={path} style={{height:20, width:20}}/>;
      },
    })
  },
  Vouchers : {
    screen : Vouchers,
    navigationOptions: ({ navigation }) => ({
      header:null,
      tabBarIcon: ({ focused, tintColor }) => {
        const path = focused ? require('../assets/dashboard/voucher-active.png') : require('../assets/dashboard/voucher.png')
        return <Image source={path} style={{height:20, width:20}}/>;
      },
    })
  },
  Notifications : {
    screen : Notifications,
    navigationOptions: ({ navigation }) => ({
      header:null,
      tabBarIcon: ({ focused, tintColor }) => {
        const path = focused ? require('../assets/dashboard/notif-active.png') : require('../assets/dashboard/notif.png')
        return <Image source={path} style={{height:20, width:20}}/>;
      },
    })
  },
  Accounts : {
    screen : Accounts,
    navigationOptions: ({ navigation }) => ({
      header:null,
      tabBarIcon: ({ focused, tintColor }) => {
        const path = focused ? require('../assets/dashboard/account-active.png') : require('../assets/dashboard/account.png')
        return <Image source={path} style={{height:20, width:20}}/>;
      },
    })
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions : {
    showLabel : false,
    activeTintColor:'#ea202d',
    inactiveTintColor :'#000000',
    showIcon : true,
    style : {backgroundColor:'#f9f9f9'},
    indicatorStyle : {
      backgroundColor : '#f9f9f9'
    }
  }
})

export default appNavigations = StackNavigator({
  ChooseLanguages : {
    screen : ChooseLanguages
  },
  OnBoards : {
    screen : OnBoards
  },
  TabDashboard : {
    screen : TabDashboard
  },
},{
  headerMode:'float',
  // initialRouteName : 'TabDashboard'
})
