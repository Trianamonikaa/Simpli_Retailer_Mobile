// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */


import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';


// import BlackScreen from './app/BlackScreen';
// import BlueScreen from './app/BlueScreen';
// import GoldScreen from './app/GoldScreen';
// import GrayScreen from './app/GrayScreen';
// import MaizeScreen from './app/MaizeScreen';
// import ScarletScreen from './app/ScarletScreen';

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import {Container, Content, Header, Body, Icon} from 'native-base'
import Logo from './src/image/logo.png'
import {DrawerNavigator, DrawerItems } from 'react-navigation'

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};


const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height: 200, backgroundColor:'white'}}>
      <Body>
        <Image
        style={styles.drawerImage}
        source={Logo}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
      </Content>
  </Container>
)

const MyApp = DrawerNavigator({
  
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  } 
},{
  initialRouteName:'Home',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'

})


export default class App extends Component {
  render() {
    return (
       
      <MyApp/>
      // <View style={styles.container}>
      // <Text> Custom Drawer Navigator App Tutorial </Text>
      // </View>
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
  drawerImage:{
    height:100,
    width:100,
    borderRadius: 50,
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
