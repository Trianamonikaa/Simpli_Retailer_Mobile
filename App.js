console.disableYellowBox = true;
import React , { Component } from "react";
import {
 
  Text,
 
  Image,
 
} from 'react-native';


import styles from './styles'

import Penjualan from './src/screen/penjualan/Penjualan'
import Produk from './src/screen/produk/Produk'
import RiwayatPenjualan from './src/screen/riwayat/RiwayatPenjualan'
import HalamanBayar from './src/screen/penjualan/HalamanBayar'
import produkpage2 from './src/screen/produk/produkpage2'
import keranjang from './src/screen/penjualan/keranjang'
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
  initialRouteName:'keranjang',
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



