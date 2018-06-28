import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import Searchbar from './Searchbar';
import {DrawerNavigator, DrawerItems } from 'react-navigation'

import { StackNavigator } from 'react-navigation';
import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
        Header,  Left, Right, Grid, Row, Form, Item, Input, Title, IconNB } from 'native-base';

import { Icon } from 'react-native-elements';
import {Router,Scene, Actions} from 'react-native-router-flux';
import Halaman from './HalamanBayar';
import keranjang from './keranjang'

class Penjualan extends Component{
    
    onPressDetail=()=>{
        this.props.navigation.navigate('Halaman');
    }
    static navigationOptions = {
        
        drawerIcon: (
            <Icon name = "shop"/>
        )
    }
    getName(){
        return Searchbar
    }
    render() {
        const { navigate} = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                    <Icon name="menu" onPress={
                        () => this.props.navigation.navigate('HalamanBayar')} />
                    </Left>
                    <Grid>
                        <Row style = {styles.row}>
                            <Col size={5}>
                                <Searchbar/>
                            </Col>
                            <Col size={1}>
                            
                                <Icon name = "shopping-cart" onPress={()=> this.props.navigation.navigate('keranjang')} /> 
                                              
                            </Col>                   
                        </Row>
                    </Grid>                    
                </Header>
                <Content style={styles.contentpenjualan}>
                   
                    <Button onPress={this.onPressDetail}>
                    
                        <Text> BAYAR?</Text>
                    </Button>
                    <View style={styles.container}>
                        <Text
                            >
                            TAMPILAN PENJUALAN
                        </Text>
                        </View>
                                </Content>

                            </Container>
        );
    };
}

const styles = StyleSheet.create({
    Searchbar: {
      backgroundColor: "#FFF",
      width : 500,
    },
        col: {
            // paddingHorizontal: 5,
            backgroundColor:'white',
            width:'80%'
        },
      col1: {
        // paddingHorizontal: 1,
        backgroundColor:'blue',
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
          opacity : 120 
        },
    imageicon:{
        width: 24,
        height: 24
    }
   
});


export default Penjualan;