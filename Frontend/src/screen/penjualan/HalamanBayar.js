import React, {Component } from "react";
import {
    Text,View,
} from "react-native";
import Searchbar from './Searchbar'
import { Button,
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
        Icon,
        } from 'native-base'


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
                        <Icon size={30}
                         name="arrow-back" onPress={
                            () => this.props.navigation.goBack()} />
                    </Left>
                    <Body style={{width : '50%'}}>
                        <Title style={{color : 'black'}}> Detail Pembayaran </Title>
                    </Body>
                </Header>                

                <Content padder style={{ backgroundColor: 'white' }}>
                    <Grid style={{ backgroundColor: 'transparent' }}>
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
                <Button  onPress = {()=> this.props.navigation.navigate('Keranjang')


                }
                block style={{backgroundColor : 'burlywood'}}>
              <Text>BAYAR</Text>
            </Button>
                </Content>

            </Container>
        );
    }

}

export default HalamanBayar;