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



const datas = 
[
    {
        id: 1,
        img: beras,
        text: "Beras Pulen",
        hargajual : "Rp 56.000",
        hargabeli : "Rp 34.000",
        barangmasuk : "09 Juli 2018"
    },
    {
        id: 2,
        img: crayon,
        text: "Crayon Faber Castell",
        hargajual : "Rp 56.000",
        hargabeli : "Rp 34.000",
        barangmasuk : "09 Juli 2018"
    },
    {
        id: 3,
        img: aice,
        text: "Aice Mochi",
        hargajual : "Rp 56.000",
        hargabeli : "Rp 34.000",
        barangmasuk : "09 Juli 2018"
    },
    
]

class Produk extends Component {
    onPressDetail = () => {
        this.props.navigation.navigate('produkpage2');
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name="keypad" />
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
                            <Input style={{ backgroundColor : '#f06292' , width : 70}}placeholder="Search" />
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
              <ListItem thumbnail
              onPress = {()=>this.props.navigation.navigate('produkpage2', {data1 : data})}>
                <Left>
                  <Thumbnail square size={55} source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.hargajual}
                  </Text>
                </Body>
                <Right>
                </Right>
              </ListItem>}
          />
                    </View>
                    {/* <View>
                        <List borderBottomColor ="yellow"
                            dataArray={datas}
                            renderRow={data =>
                                <ListItem 
                                onPress = {()=>this.props.navigation.navigate('produkpage2', {data1 : data})}>
                                    <Left style = {{backgroundColor : 'blue'}}>
                                        <Thumbnail square size={55} source={data.img} />
                                    </Left>
                                    <Body style = {{backgroundColor : 'red'}}>
                                        <Text>
                                            {data.text}
                                        </Text>
                                        <Text>
                                            {data.harga}
                                        </Text>
                                    </Body>
                                    <Right style = {{backgroundColor : 'grey'}}>
                                    </Right>
                                </ListItem>}
                        />
                    </View> */}
                </Content>

            </Container>
        );
    }
}

export default Produk;