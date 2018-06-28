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

// import Expo from 'expo';

import { Router, Scene } from 'react-native-router-flux';


// import BlackScreen from './app/BlackScreen';
// import BlueScreen from './app/BlueScreen';
// import GoldScreen from './app/GoldScreen';
// import GrayScreen from './app/GrayScreen';
// import MaizeScreen from './app/MaizeScreen';
// import ScarletScreen from './app/ScarletScreen';

import Penjualan from './Penjualan'
import Produk from './Produk'
import RiwayatPenjualan from './RiwayatPenjualan'

import {Container, Content, Header, Body,Button,Item,Input, Icon} from 'native-base'
import {DrawerNavigator, DrawerItems } from 'react-navigation'
import {StackNavigator } from 'react-navigation'

import Logo from './src/image/logo.jpg'



// class Penjualan extends React.Component {
//   static navigationOptions = {
//     title : 'Home',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.contianer}>
//       <Text
//       onPress= {() =>navigate('Profile')}>navigate to Profile
//       </Text>
//       </View>

//     )
//   }
// }

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};


const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height: 200, backgroundColor:'blue'}}>
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
  
  Penjualan: {
    screen: Penjualan
  },
  Produk: {
    screen: Produk
  },
  Riwayat: {
    screen: RiwayatPenjualan
  },
},{
  initialRouteName:'Penjualan',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});
// const NavigationApp = StackNavigator({
//   // Penjualan: { screen : Penjualan},
//   // Produk: { screen: Produk},
//   // RiwayatPenjualan: {RiwayatPenjualan},
// },{
//   navigationOptions: {
//     headerStyle: {
//       marginTop: Expo.Constants.statusBarHeight
//     }
//   }

// HEAD
// // });
// type Props = {};
// export default class App extends Component<Props> {
// =======
// })


export default class App extends React.Component {
  render() {
    return (
          
      <MyApp/> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  drawerImage:{
    height:190,
    width:280,
    
    
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
