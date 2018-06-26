import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import Searchbar from './Searchbar';
import HalamanPenjualan from './HalamanPenjualan'

import {StackNavigator} from 'react-navigation';
import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
    Header,  Left, Right, Grid, Row, Form,Icon, Item, Input, Title, IconNB, } from 'native-base'

import {Router,Scene, Actions} from 'react-native-router-flux'


class Penjualan extends React.Component{
    static navigationOptions = {
        title : 'Home'
    };
    getName(){
        return Searchbar
    }
    render() {
        const { navigate} = this.props.navigation;
        return (
            <Container>
                <Header>
                <Left>
                    <Icon name="ios-menu" onPress={
                        () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Grid>
                        <Row style = {styles.row}>
                            <Col size={5}>
                                <Searchbar/>
                            </Col>
                            <Col size={1}>
                                <Icon name = "cart" style={styles.cart}/>                              
                            </Col>                   
                        </Row>
                    </Grid>                    
                </Header>
                <Content style={styles.contentpenjualan}>
                   
                    {/* <Button light>
                        <Text> light </Text>
                    </Button> */}
                    <View style={styles.container}>
                        <Text
                            style={styles.welcome}
                            // onPress={() => Actions.Halaman()}
                            >
                            TAMPILAN PENJUALAN
                        </Text>
                        </View>
                                </Content>

                            </Container>
        );
    };
}
const App =()=>{
   
    return (
        <Router>
            <Scene key="root">
            <Scene
            key="Penjualan"
            component={Penjualan}
            title="Penjualan"
            initial />
            <Scene
            key="Halaman"
            component={HalamanPenjualan}
            title="Halaman Penjualan"
             />
            </Scene>
        </Router>
    )
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
          opacity : 120 }
   
});


export default Penjualan;