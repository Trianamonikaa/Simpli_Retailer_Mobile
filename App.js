import React , { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import styles from './styles'

import Penjualan from './Penjualan'
import Produk from './Produk'
import RiwayatPenjualan from './RiwayatPenjualan'
import HalamanBayar from './HalamanBayar'
import produkpage2 from './produkpage2'
import keranjang from './keranjang'
import riwayatpage2 from './riwayatpage2'

import {Container, Content, Header, Body ,Item,Input, Icon} from 'native-base'
import {DrawerNavigator, DrawerItems } from 'react-navigation'

import Logo from './src/image/logo.jpg'

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
  produkpage2 : {
    screen : produkpage2
  },
  Riwayat: {
    screen: RiwayatPenjualan
  },
  Halaman: {
    screen: HalamanBayar
  },
  keranjang: {
    screen: keranjang
  },
  riwayatpage2: {
    screen: riwayatpage2
  }, 
},{
  initialRouteName:'Penjualan',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  
});

export default class App extends Component {
  render() {
    return (  
     <MyApp/>
    
    );
  }
}



