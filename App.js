// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */


import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { DrawerNavigator } from 'react-navigation'

import BlackScreen from './app/BlackScreen';
import BlueScreen from './app/BlueScreen';
import GoldScreen from './app/GoldScreen';
import GrayScreen from './app/GrayScreen';
import MaizeScreen from './app/MaizeScreen';
import ScarletScreen from './app/ScarletScreen';

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Text> Custom Drawer Navigator App Tutorial </Text>
      </View>





      // <Router>
      //   <Scene key="root">
      //       <Scene
      //         key="scarlet"
      //         component={ScarletScreen}
      //         title="Scarlet"
      //         initial
      //         />
      //         <Scene
      //         key="gray"
      //         component={GrayScreen}
      //         title="Gray"
      //         />
      //   </Scene>
      // </Router>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
