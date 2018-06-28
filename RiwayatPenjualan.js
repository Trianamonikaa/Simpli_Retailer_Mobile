import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
    Header,  Left, Right, Grid, Row, Form, Item, Input, Title, IconNB } from 'native-base';
import riwayatpage2 from './riwayatpage2'

import { Icon } from 'react-native-elements';
class RiwayatPenjualan extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name = "air"/>
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=> this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Button onPress={()=> this.props.navigation.navigate('riwayatpage2')} >
                    <Text>haiiiiiii</Text>
                </Button>
                    <Text> ini halaman RiwayatPenjualan yaaa </Text>
                </Content>

            </Container>
        );
    }
}
export default RiwayatPenjualan;