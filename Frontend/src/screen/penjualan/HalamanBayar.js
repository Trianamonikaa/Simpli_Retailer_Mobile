import React, { Component } from "react";
import {
    Text,
    View,
    AsyncStorage,
    NavigationActions
} from "react-native";
import PopupDialog, { DialogButton, SlideAnimation } from 'react-native-popup-dialog';
import {
    Button,
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
            cash: '',
            debit: '',
            credit: '',
            sum: 0,
            min: 0,
            Order:
            {
                Cash: 0,
                Credit: 0,
                Debit: 0,
                Id: '1',
                OrderNo: '1',
                OrderDate: '090718',
                Status: '0',
                Type: 'ok',
                Description: 'ok',
                CreatedTime: '1',
                TotalBayar: 0,
                Kembalian: 0,
                TotalHarga: 0,
                ModifiedTime: '1',
                ModifiedBy: '0',
                Cashier: '2',
                OrderItem: []
            }
        }
        let Order = this.props.navigation.getParam('Order', {});
        this.state.Order = Order;
        this.setState({ Order: this.state.Order });
        // this.setState({ TotalBayar: this.state.sum })
    }
    updatecash(cash, debit, credit) {
        this.state.Order.TotalBayar = Number(cash) + Number(debit) + Number(credit);
        this.setState({
            cash,
            sum: this.state.Order.TotalBayar
        })
    }
    updatedebit(debit, cash, credit) {
        this.state.Order.TotalBayar = Number(cash) + Number(debit) + Number(credit);
        this.setState({
            debit,
            sum: this.state.Order.TotalBayar
        })
    }
    updatecredit(credit, cash, debit) {
        this.state.Order.TotalBayar = Number(cash) + Number(debit) + Number(credit);
        this.setState({
            credit,
            sum: this.state.Order.TotalBayar
        })
    }
    kembalian() {
        this.state.Order.Kembalian = this.state.Order.TotalBayar - this.state.Order.TotalHarga;
        const kembalian = this.state.Order.Kembalian;
        return kembalian;
    }
    returnData() {
        this.props.navigation.state.params.returnData('Order');
        this.props.navigation.goBack();
        return Order.getTotal;
    }
    reset() {
        AsyncStorage.getItem('ListOrder', (err, result) => {
            if (result !== null) {
                result.push(result);
                AsyncStorage.mergeItem('ListOrder', JSON.stringify(result), () => { })
            }
        }).then((response) => {
            AsyncStorage.setItem('ListOrder', JSON.stringify(response), () => { })
        });
        // AsyncStorage.mergeItem('ListOrder', JSON.stringify(this.state.Order));
        // console.log(this.state.Order)
        // AsyncStorage.setItem('ListOrder', JSON.stringify(this.state.Order), () => {
        // });
        this.props.navigation.navigate('Keranjang', { OrderItem: [] });
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
                <PopupDialog
                    height={120}
                    actions={[<DialogButton text="Oke" align="center"
                        onPress={() => this.reset()} />]}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={SlideAnimation}>

                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ fontWeight: 'Bold', textAlign: 'center', fontSize: 22, paddingBottom: 5, paddingTop: 20, color: 'black' }}>
                            Transaksi Selesai</Text>
                    </View>
                </PopupDialog>
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
                                            value={this.state.cash}
                                            onChangeText={(cash) => this.updatecash(cash, this.state.credit, this.state.debit)} />
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
                                            value={this.state.debit}
                                            onChangeText={(debit) => this.updatedebit(debit, this.state.cash, this.state.credit)} />
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
                                            value={this.state.credit}
                                            onChangeText={(credit) => this.updatecredit(credit, this.state.cash, this.state.debit)} />
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
                                    Rp {this.state.Order.TotalBayar}
                                </Text>
                            </Body>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Left>
                                <Text style={styles.text}>Kembali</Text>
                            </Left>
                            <Body >
                                <Text style={styles.text}>
                                    Rp {this.kembalian(this.state.Order.kembalian)}
                                </Text>
                            </Body>
                        </Row>
                    </Grid>
                    <Button onPress={() => this.popupDialog.show()}
                        block style={{ backgroundColor: '#ff4081' }}>
                        <Text style={styles.text}>BAYAR</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default HalamanBayar;