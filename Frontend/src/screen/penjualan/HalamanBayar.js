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
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            third: '',
            sum: 0,
            min: 0,
            Order:
            {
                Id: '1',
                OrderNo: '1',
                OrderDate: '090718',
                Status: '0',
                Type: 'ok',
                Description: 'ok',
                CreatedTime: '1',
                TotalHarga: 0,
                ModifiedTime: '1',
                ModifiedBy: '0',
                Cashier: '2',
                OrderItem: []
            }
        }
        let Order = this.props.navigation.getParam('Order', {});
        this.state.Order = Order;

        this.setState({Order : this.state.Order})

    }
    totalbayar = () => {
        const { second, first, third } = this.state;
        this.setState({
            sum: Number(first) + Number(second) + Number(third)
        });
    }
    updatefirst(first, second, third) {
        this.setState({
            first,
            sum: Number(first) + Number(second) + Number(third)
        })
    }
    updatesecond(second, first, third) {
        this.setState({
            second,
            sum: Number(first) + Number(second) + Number(third)
        })
    }
    updatethird(third, second, first) {
        this.setState({
            third,
            sum: Number(first) + Number(second) + Number(third)
        })
    }
    returnData() {
        this.props.navigation.state.params.returnData('Order');
        this.props.navigation.goBack();
        // Order.totalharga.push(Order);
        // return Order.totalharga;
        return Order.getTotal;
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
                                        <Input onPress={this.totalbayar}
                                            style={{ width: 150, height: 40, fontSize: 15 }}
                                            keyboardType={'numeric'} placeholder="Harga"
                                            value={this.state.first}
                                            // onChangeText={(first) => this.setState({first})} />
                                            onChangeText={(first) => this.updatefirst(first, this.state.third, this.state.second)} />
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
                                            // onChangeText={(second) => this.setState({second})} />
                                            onChangeText={(second) => this.updatesecond(second, this.state.first, this.state.third)} />

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
                                            // onChangeText={(third) => this.setState({third})} />
                                            onChangeText={(third) => this.updatethird(third, this.state.first, this.state.second)} />

                                    </Item>
                                </Form>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Total Harga</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp {this.state.Order.TotalHarga}
                                </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Diskon</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp 0
                            </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Pajak</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp 0
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
                                    Rp {this.min}
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