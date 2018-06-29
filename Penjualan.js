import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    AppRegistry,
} from "react-native";
import Searchbar from './Searchbar';
import {DrawerNavigator, DrawerItems } from 'react-navigation'


import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
        Header,  Left, Right, Grid, Row, Form, Item, Input, Title, IconNB } from 'native-base';

import { Icon } from 'react-native-elements';
import {Router,Scene, Actions} from 'react-native-router-flux';
import Halaman from './HalamanBayar';
import keranjang from './keranjang'
import styles from './styles'

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
                            <Col  style = {styles.keranjang}>
                                <Icon name = "shopping-cart" onPress={
                                ()=> this.props.navigation.navigate('keranjang')} />                   
                            <Right/>
                            </Col>                   
                        </Row>
                    </Grid>                    
                </Header>
                <Content style={styles.contentpenjualan}>   
                    <Button onPress={this.onPressDetail}>
                        <Text> BAYAR?</Text>
                    </Button>
                    
                </Content>


            </Container>
        );
    };
}
export default Penjualan;