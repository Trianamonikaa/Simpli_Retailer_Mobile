import React, {Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Searchbar from './Searchbar'
import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
    Header,  Left, Right, Grid, Row, Form,  Item, Input, Title, IconNB, } from 'native-base'
import Halaman from './HalamanBayar'
import { Icon } from 'react-native-elements';
import Penjualan from './Penjualan'

class Produk extends Component {
    onPressDetail=()=>{
        this.props.navigation.navigate('produkpage2');
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name = "shop"/> 
        ), 
    }
    getName(){
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Icon name="menu" onPress={
                        () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Grid>
                        <Row style = {styles.row}>
                            <Col size={5}>
                                <Searchbar/>
                            </Col>
                        </Row>
                    </Grid>
                </Header>

                <Content style={styles.contentpenjualan}>
                    <Button onPress = {this.onPressDetail}>
                        <Text> lihat detail produk </Text>
                    </Button>
                    <Text> halaman Produk</Text>
                </Content>

            </Container>
        );
    }

}
const styles = StyleSheet.create({
    
        col: {
            // paddingHorizontal: 5,
            backgroundColor:'white',
            width:'80%'
        },
      col1: {
        // paddingHorizontal: 1,
        backgroundColor:'pink',
        width:'20%'
      },
      row: {
        paddingBottom: 5,
      },
      iconText: {
        fontSize: 12,
      },
      mbl15:{
          marginBottom : 20,
          backgroundColor: 'red',
          width: 80,
          height: 50
      },
      cart:{

      },
      contentpenjualan:{ 
          backgroundColor: 'white', 
          padding:0, 
          
        },
        imageicon: {
            width :24,
            height: 24
        }
});
export default Produk;