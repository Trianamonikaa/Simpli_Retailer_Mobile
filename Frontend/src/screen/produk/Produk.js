import React, { Component } from "react";
import {
    View,

} from "react-native";
import {
    Button,
    Container,
    Content,
    Thumbnail,
    Body, Item,
    Header,
    Left,
    Right,
    Grid,
    Row, Input,
    Icon,
    List,
    ListItem,
    Text,
    Col,
} from 'native-base'
import Searchbar from './Searchbar'

import styles from './styles'
const beras = require("../../image/beras.jpg");
const crayon = require("../../image/crayon.jpg");
const aice = require("../../image/aice.jpg");
const susu = require("../../image/susu.jpg");

const datas =
    [
        {
            id: 1,
            img: beras,
            text: "Beras Pulen",
            hargajual: 56000,
            hargabeli: 34000,
            barangmasuk: "09 Juli 2018"
        },
        {
            id: 2,
            img: crayon,
            text: "Crayon Faber Castell",
            hargajual: 56000,
            hargabeli: 55555,
            barangmasuk: "09 Juli 2018"
        },
        {
            id: 3,
            img: aice,
            text: "Aice Mochi",
            hargajual: 2000,
            hargabeli: 1500,
            barangmasuk: "09 Juli 2018"
        },
        {
            id: 4,
            img: susu,
            text: "Susu Ultra Milk",
            hargajual: 3500,
            hargabeli: 2000,
            barangmasuk: "09 Juli 2018"
        }, {
            id: 1,
            img: beras,
            text: "Beras Pulen",
            hargajual: 56000,
            hargabeli: 34000,
            barangmasuk: "09 Juli 2018"
        },
        {
            id: 2,
            img: crayon,
            text: "Crayon Faber Castell",
            hargajual: 56000,
            hargabeli: 55555,
            barangmasuk: "09 Juli 2018"
        },
        {
            id: 3,
            img: aice,
            text: "Aice Mochi",
            hargajual: 2000,
            hargabeli: 1500,
            barangmasuk: "09 Juli 2018"
        },
        {
            id: 4,
            img: susu,
            text: "Susu Ultra Milk",
            hargajual: 3500,
            hargabeli: 2000,
            barangmasuk: "09 Juli 2018"
        }
    ]

class Produk extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name="clipboard" />
        ),
    }
    getName() {
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header style={styles.headerback}>
                    <Left style={{ width: '10%' }}>
                        <Icon size={40}
                            name="menu" onPress={
                                () => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ width: '85%', backgroundColor: 'rebbecapurple' }}>
                        <Item >
                            <Icon active name="search" />
                            <Input style={{ backgroundColor: '#f06292', width: 70 }} placeholder="Search" />
                        </Item>
                    </Body>
                    <Right style={{ width: '5%' }}>
                    </Right>
                </Header>
                <Content style={styles.contentpenjualan}>
                    <View>
                        <List
                            dataArray={datas}
                            renderRow={data =>
                                <ListItem thumbnail noBorder={true}
                                    onPress={() => this.props.navigation.navigate('produkpage2', { data1: data })}>
                                    <Left>
                                        <Thumbnail square size={55} source={data.img} />
                                    </Left>
                                    <Body>
                                        <Text style={[styles.text, {fontWeight : 'bold'}]}>
                                            {data.text}
                                        </Text>
                                        <Text style={styles.text}
                                            numberOfLines={1} note>
                                            Rp {data.hargajual}
                                        </Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>}
                        />
                    </View>
                </Content>

            </Container>
        );
    }
}

export default Produk;