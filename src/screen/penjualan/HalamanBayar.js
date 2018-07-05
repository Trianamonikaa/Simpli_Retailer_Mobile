import React, {Component } from "react";
import {
    Text,View,
} from "react-native";
import Searchbar from './Searchbar'
import { 
        Col, 
        Container, 
        Content, 
        Body,
        Header,  
        Left, 
        Right, 
        Grid, 
        Row, 
        Form, 
        Item, 
        Input, 
        Title, 
        } from 'native-base'


import { Icon } from 'react-native-elements';
import styles from './styles';
const pict1 = require("../../image/beras.jpg")
const cards = [
    {
        text: "Beras",
        name : "one",
        image : pict1
    },
]

class HalamanBayar extends Component {
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
               <Header style = {styles.headerback}>
                    <Left>
                        <Icon size={40}
                         name="menu" onPress={
                            () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Body style={{width : '50%'}}>
                        <Title style={{color : 'black'}}> Detail Pembayaran </Title>
                    </Body>
                </Header>                

                <Content padder style={{ backgroundColor: 'grey' }}>
                    <Grid style={{ backgroundColor: 'yellow' }}>
                        <Row >
                           
                            <Left>
                                <Text style = {styles.text}>Cash</Text>
                            </Left>
                            <Body >
                            <Form style = {{width : 150, height :40, }}>
                                    <Item regular>
                                        <Input style = {{width : 150, height :35,fontSize : 15}}
                                        keyboardType={'numeric'} placeholder="Harga" />
                                    </Item>
                                </Form>
                            </Body>
                        </Row>
                        <Row>
                          
                            <Left>
                                <Text style = {styles.text}>Debit</Text>
                            </Left>
                            <Body >
                            <Form style = {{width : 150, height :40, }}>
                                    <Item regular>
                                        <Input style = {{width : 150, height :35, fontSize : 15}}
                                        keyboardType={'numeric'} placeholder="Harga" />
                                    </Item>
                                </Form>
                            </Body>
                        </Row>
                        <Row>
                          
                            <Left>
                                <Text style = {styles.text}>Credit Card</Text>
                            </Left>
                            <Body >
                            <Form style = {{width : 150, height :40,}}>
                                    <Item regular>
                                        <Input 
                                        style = {{width : 150, height :35, fontSize : 15}}
                                        keyboardType={'numeric'} placeholder="Harga" />
                                    </Item>
                                </Form>
                            </Body>
                        </Row>
                        <Row style = {{paddingTop : 10}}>
                             <Left>
                                <Text style = {styles.text}>Total Harga</Text>
                            </Left>
                            <Body >
                            <Text style={styles.text}>
                                    Rp 54.000
                            </Text>
                            </Body>
                        </Row>
                        <Row>
                             <Left>
                                <Text style = {styles.text}>Diskon</Text>
                            </Left>
                            <Body >
                            <Text style={styles.text}>
                                    Rp 54.000
                            </Text>
                            </Body>
                        </Row>
                        <Row>
                             <Left>
                                <Text style = {styles.text}>Pajak</Text>
                            </Left>
                            <Body >
                            <Text style={styles.text}>
                                    Rp 54.000
                            </Text>
                            </Body>
                        </Row>
                        <Row>
                             <Left>
                                <Text style = {styles.text}>Tunai</Text>
                            </Left>
                            <Body >
                            <Text style={styles.text}>
                                    Rp 54.000
                            </Text>
                            </Body>
                        </Row>
                        <Row>
                             <Left>
                                <Text style = {styles.text}>Kembali</Text>
                            </Left>
                            <Body >
                            <Text style={styles.text}>
                                    Rp 54.000
                            </Text>
                            </Body>
                        </Row>
                        
                </Grid>
                </Content>

            </Container>
        );
    }

}

export default HalamanBayar;