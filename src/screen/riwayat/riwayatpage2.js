import React, {Component } from "react";
import {
    Text,View
   
} from "react-native";
import Searchbar from './Searchbar'
import {  Container, Content, Body,
    Header,  Left, Right,  Title, List, ListItem } from 'native-base'

import styles from './styles'
import { Icon } from 'react-native-elements';

const data= [
    {
        nama : "beras",
        harga : "Rp 98.000"
    },
    {
        nama : "susu",
        harga : "Rp 66.000"
    },
    {
        nama : "pasir",
        harga : "Rp 104.000"
    }
]
class riwayatpage2 extends Component { 
    static navigationOptions = {
        drawerLabel: ()=> null
    }
    getName(){     
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Icon name="arrow-back" onPress={
                        () => this.props.navigation.navigate('Riwayat')} />
                    </Left>
                    <Body>
                        <Title> Detail Transaksi</Title>
                        <Right/>
                    </Body>
                </Header>

                <Content >                
                    <Text  style={styles.text} > 
                           ID ORDER : 02-07-242</Text>
                        <Text style={styles.text}> TANGGAL : 02-07-2018</Text>
                        <Text style={styles.text} >  PEMBAYARAN : CASH</Text>
                        <Text style={styles.text}> DAFTAR BELANJA</Text>
                        <List
            dataArray={data}
            renderRow={data =>
              <ListItem avatar>
               <Body>
                    <View style={{paddingBottom : 5}}>
                  <Text style ={{fontSize: 18  }}>{data.nama}</Text>
              <Text style={styles.textright}>{data.harga}</Text>
                </View>
                </Body>
            </ListItem>}/>
          <ListItem avatar>
                        <Body>
                            <View style={styles.riwayatitem}>
                                <Text style={styles.text}>Total Harga</Text>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </View>
                            <View style={styles.riwayatitem}>
                                <Text style={styles.text}>Diskon</Text>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </View>
                            <View style={styles.riwayatitem}>
                                <Text style={styles.text}>Pajak</Text>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </View>
                            <View style={styles.riwayatitem}>
                                <Text style={styles.text}>Tunai</Text>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </View>
                            <View style={styles.riwayatitem}>
                                <Text style={styles.text}>Kembali</Text>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </View>
                        </Body>
        </ListItem>
                </Content>

            </Container>
        );
    }
}

export default riwayatpage2;