import React, { Component } from "react";
import {
    Text, View, TouchableHighlight
} from "react-native";
import Searchbar from './Searchbar'
import {
    Button,
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
        name: "one",
        image: pict1
    },
]

class HalamanBayar extends Component {
    onPresDetail
    static navigationOptions = {
        drawerLabel: () => null
    }
    constructor() {
        super();
        this.state = {
            first: '',
            second: '',
            third: '',
            sum: 0
        }
    }
    totalbayar = () => {
        const { first, second, third } = this.state;
        this.setState({
            sum: Number(first) + Number(second) + Number(third)
        })
    }
    
    getTotal() {
        this.props.navigation.state.params.Order;
        // return Order.getTotal;
    }

    render() {
        return (
            <Container>
                <Header style={styles.headerback}>
                    <Left style={{ width: '10%' }}>
                        <Icon size={30}
                            name="arrow-back" onPress={
                                () => this.props.navigation.goBack()} />
                    </Left>
                    <Body style={{ width: '85%' }}>
                        <Title style={{ color: 'black' }}> Detail Pembayaran</Title>
                    </Body>
                    <Right style={{ width: '5%', backgroundColor: 'green' }}>
                    </Right>
                </Header>
                <Content padder style={{ backgroundColor: 'white' }}>
                    <Grid style={{ backgroundColor: 'transparent' }}>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>

                            <Left>
                                <Text style={styles.text}>Cash</Text>
                            </Left>
                            <Body >
                                <Form style={{ width: 150, height: 40, }}>
                                    <Item regular
                                    >
                                        <Input style={{ width: 150, height: 40, fontSize: 15 }}
                                            keyboardType={'numeric'} placeholder="Harga"
                                            value={this.state.first}
                                            onChangeText={(first) => this.setState({ first })} />
                                    </Item>
                                </Form>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>

                            <Left>
                                <Text style={styles.text}>Debit</Text>
                            </Left>
                            <Body >
                                <Form style={{ width: 150, height: 40, paddingBottom: 12 }}>
                                    <Item regular>
                                        <Input style={{ width: 150, height: 40, fontSize: 15 }}
                                            keyboardType={'numeric'} placeholder="Harga"
                                            value={this.state.second}
                                            onChangeText={(second) => this.setState({ second })} />
                                    </Item>
                                </Form>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>

                            <Left>
                                <Text style={styles.text}>Credit Card</Text>
                            </Left>
                            <Body >
                                <Form style={{ width: 150, height: 40, paddingBottom: 12 }}>
                                    <Item regular>
                                        <Input
                                            style={{ width: 150, height: 40, fontSize: 15 }}
                                            keyboardType={'numeric'} placeholder="Harga"
                                            value={this.state.third}
                                            onChangeText={(third) => this.setState({ third })} />
                                    </Item>
                                </Form>
                                <TouchableHighlight onPress={this.totalbayar}>
                                    <Text style ={styles.text}>Calculate</Text>
                                </TouchableHighlight>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Total Harga</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    {this.getTotal()}
                            </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Diskon</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp 54000
                            </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Pajak</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp 54000
                            </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Bayar</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                   Rp {this.state.sum}
                                </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Kembali</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp 54000
                            </Text>
                            </Body>
                        </Row>

                    </Grid>
                    <Button onPress={() => this.props.navigation.navigate('Keranjang')


                    }
                        block style={{ backgroundColor: '#ff4081' }}>
                        <Text style={styles.text}>BAYAR</Text>
                    </Button>
                </Content>

            </Container>
        );
    }

}

export default HalamanBayar;