console.disableYellowBox = true;

import React , { Component} from "react";
import {
 
  Text,
  Image,
  StatusBar,
 
} from 'react-native';


import styles from './styles'

import Penjualan from './src/screen/penjualan/Penjualan'
import Produk from './src/screen/produk/Produk'
import RiwayatPenjualan from './src/screen/riwayat/RiwayatPenjualan'
import HalamanBayar from './src/screen/penjualan/HalamanBayar'
import produkpage2 from './src/screen/produk/produkpage2'
import Keranjang from './src/screen/penjualan/Keranjang'
import riwayatpage2 from './src/screen/riwayat/riwayatpage2'

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
    <StatusBar 
    backgroundColor = "gold"
    barStyle="light-content"/>
    <Header style={{height: 200, backgroundColor:'blue', paddingLeft : 0, paddingRight : 0}}>
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
  
  Keranjang: {
    screen: Keranjang
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
  Penjualan: {
    screen: Penjualan
  },
  riwayatpage2: {
    screen: riwayatpage2
  }, 
},{
  initialRouteName:'Keranjang',
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



