import React, {Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Searchbar from './Searchbar'
import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
    Header,  Left, Right, Grid, Row, Form,  Item, Input, Title, IconNB, } from 'native-base'
import Penjualan from './Penjualan'
import styles from './styles'
import Halaman from './HalamanBayar'
import { Icon } from 'react-native-elements';
class keranjang extends Component {
    onPresDetail 
    static navigationOptions = {
        drawerLabel: ()=> null
    }
    constructor(){
        super()
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
                        () => this.props.navigation.goBack()} />
                    </Left>
                    <Body>
                        <Title> Keranjang Belanjaan </Title>
                        <Right/>
                    </Body> 
                </Header>

                <Content style={styles.contentpenjualan}>
                 <Button onPress ={ ()=>this.props.navigation.navigate('Halaman')} >
                 <Text>MAU BAYAR INI</Text> 
                 </Button>
                    <Text >ini HALAMAN KERANJANG YA </Text>
                </Content>

            </Container>
        );
    }

}

export default keranjang;