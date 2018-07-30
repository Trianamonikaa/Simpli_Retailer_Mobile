import React, { Component } from "react";
import {
    Text,
    NavigationActions,
    View,
    StackActions
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
        this.setState({ Order: this.state.Order })
        this.setState({ TotalBayar: this.state.sum })
        this.setState({ Kembalian: this.state.min })

        let OrderItem = this.props.navigation.getParam('OrderItem', []);
        OrderItem.forEach(item => {
            item.harga = item.peritem * item.kuantitas;
            this.state.Order.TotalHarga += item.harga;
            this.state.Order.OrderItem.push(item);
        });
        this.setState({ Order: this.state.Order });
    }
    gotoriwayat(Order) {
        let riwayatorder = this.props.navigation.getParam('Order' , 'default');
        riwayatorder.push(Order);
        this.props.navigation.navigate('Riwayat', { riwayatorder: this.state.Order})
    }
    updatecash(cash, debit, credit) {
        this.state.Order.TotalBayar = Number(cash) + Number(debit) + Number(credit)
        this.setState({
            cash,
            // sum : Number(cash) + Number(debit) + Number(credit)
            sum: this.state.Order.TotalBayar
        })
    }
    updatedebit(debit, cash, credit) {

        this.state.Order.TotalBayar = Number(cash) + Number(debit) + Number(credit)
        this.setState({
            debit,
            sum: this.state.Order.TotalBayar
            // sum: Number(cash) + Number(debit) + Number(credit)
        })
    }
    updatecredit(credit, cash, debit) {
        this.state.Order.TotalBayar = Number(cash) + Number(debit) + Number(credit)
        this.setState({
            credit,
            //    sum: Number(cash) + Number(debit) + Number(credit)
            sum: this.state.Order.TotalBayar
        })
    }
    kembalian() {
        this.state.Order.Kembalian = this.state.Order.TotalBayar - this.state.Order.TotalHarga;
        this.setState({ min :  this.state.Order.Kembalian })
    }
    returnData() {
        this.props.navigation.state.params.returnData('Order');
        this.props.navigation.goBack();
        // Order.totalharga.push(Order);
        // return Order.totalharga;
        return Order.getTotal;
    }
    reset() {
        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Keranjang' })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
    reset = () => {
        const backFrom = this.props.navigation.state.params.dontBackToMe
        this.props.navigation.goBack(backFrom)
        // const resetAction = StackActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({ routeName: 'ScreenThree' })],
        // });
        // this.props.navigation.dispatch(resetAction);
    }


    render() {
        return (
            // <NativeRouter>
            //     <Switch>
            //         <Route path='/plants' component={Plants} />
            //         <Route path='/tutorial' component={Tutorial} />
            //         <Route path='/welcome' component={Welcome} />
            //         <Redirect to={Keranjang} />
            //     </Switch>
            // </NativeRouter>
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
                                <Text style={styles.text}>{this.state.Order.OrderItem[0].nama}</Text>
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
                                    Rp {this.state.Order.Kembalian}
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