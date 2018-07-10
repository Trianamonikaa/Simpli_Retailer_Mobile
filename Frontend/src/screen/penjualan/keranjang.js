'use strict';
import PopupDialog, { DialogButton } from 'react-native-popup-dialog';
import React, { Component, PropTypes } from "react";
import {
    Platform,
    Text,
    View,
    AppRegistry,
    Alert,
    FlatList,
} from "react-native";
// import BarcodeScanner from 'react-native-barcodescanner';
import Searchbar from './Searchbar'
import {
    Button,
    Icon,
    Container,
    Content,
    Body,
    Header,
    Left,
    Right,
    Title,
    List,
    ListItem,
    SwipeRow,
    Form,
    Input,
    Item,
    Grid,
    Row,
    Col
} from 'native-base'
import styles from './styles'
class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: 0,
            selecteditem: 0,
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
    }
    // barcodeReceived(e) {
    //     console.log('Barcode: ' + e.data);
    //     console.log('Type: ' + e.type);
    // }
    static navigationOptions = {
        drawerIcon: (
            <Icon name="ios-cart-outline" />
        )
    }
    getName() {
        return Searchbar
    }
    ubahkuantitas(number) {
        this.popupDialog.dismiss();
        this.state.Order.OrderItem[this.state.selecteditem].kuantitas = number;
        // this.render();
        // alert(Order.OrderItem[this.state.selecteditem].kuantitas);
        // alert(.kuantitas);
        this.state.inputNumber = 0;
    }
    showalert1(title, msg, item) {
        Alert.alert(
            title,
            msg,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                { text: 'OK', onPress: () => this.deleteRow(item) }
            ],
            { cancelable: false }
        )
    }
    returnData(data) {
        this.state.Order.OrderItem.push(data);
        alert(this.state.Order.OrderItem[0].nama);
        this.state.Order.TotalHarga = 0;
        this.state.Order.OrderItem.forEach((data) => {
            data.harga = data.kuantitas * data.peritem;
            this.state.Order.TotalHarga += data.harga;
        })
    }
    getTotal() {
        return this.state.Order.TotalHarga;
    }
    render() {
        return (
            <Container >
                <Header style={styles.headerback}>
                    <Left style={{ width: '10%' }}>
                        <Icon size={40}
                            style={{ paddingLeft: 5, paddingBottom: 5, paddingTop: 5 }}
                            name="menu" onPress={
                                () => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ width: '80%' }}>
                        <Title style={{ color: 'black' }}> Keranjang Belanja </Title>
                    </Body>
                    <Right style={{ width: '10%' }}>
                        <Button style={{ backgroundColor: 'papayawhip' }}
                            onPress={() => this.props.navigation.navigate('Penjualan', { returnData: this.returnData.bind(this) })}
                        >
                            <Icon name="search" style={{ color: 'darksalmon' }}>
                            </Icon>
                        </Button>
                    </Right>
                </Header>
                <PopupDialog
                    height={200}
                    actions={[<DialogButton text="Oke" align="center" 
                    onPress={() => this.ubahkuantitas(this.state.inputNumber)} />]}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                >
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ fontWeight: 'Bold', textAlign: 'center', fontSize: 22, paddingBottom: 5, paddingTop: 10, color: 'black' }}>
                            Masukkan berapa banyak barang yang akan dibeli</Text>
                        <Form style={{ backgroundColor: 'white', alignItems: 'center' }} >
                            <Item regular style={{
                                backgroundColor: 'transparent', width: '50%', textAlign: 'center', justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Input style={{ textAlign: 'center', backgroundColor: 'lightgrey' }}
                                    keyboardType={'numeric'} placeholder="Jumlah barang" placeholderTextColor='grey'
                                    onChangeText={(inputNumber) => this.setState({inputNumber })}
                                    value={this.state.inputNumber}>
                                </Input>
                            </Item>
                        </Form>

                    </View>
                </PopupDialog>
                <Content >

                    <View style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}   >
                        <List scrollEnabled={false}
                            style={styles.listkeranjang}

                            dataArray={this.state.Order.OrderItem}
                            renderRow={(data, sectionID, rowID, higlightRow) =>
                                <ListItem
                                    style={styles.rowmenu}>
                                    <SwipeRow scrollEnabled={false}
                                        style={{ backgroundColor: 'white', paddingRight: 0, marginRight: 0, borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0, }}
                                        leftOpenValue={75}
                                        rightOpenValue={-75}
                                        left={

                                            <Button onPress={() => {
                                                this.state.selecteditem = rowID;
                                                this.popupDialog.
                                                    this.popupDialog.show();
                                            }}
                                            >
                                                <Icon active name="add" style={{ color: "#FFF" }} />
                                            </Button>
                                        }

                                        right={

                                            <Button danger >
                                                <Icon active name="trash" onPress={() => this.showalert("Delete Confirmation", "Delete " + data.nama + "?", data)} />

                                            </Button>
                                        }
                                        body={
                                            <View noBorder={true}
                                                style={{ backgroundColor: 'transparent', width: '100%', paddingLeft: 0, margin: 0, paddingBottom: 0, marginLeft: 0 }}>

                                                <ListItem noBorder={true}
                                                    style={{ backgroundColor: 'transparent', marginLeft: 0, paddingBottom: 0, paddingTop: 0 }}>
                                                    <Grid style={{ backgroundColor: 'transparent', paddingBottom: 0, paddingTop: 0, marginBottom: 0, marginTop: 0, marginLeft: 10 }}>
                                                        <Row  >

                                                            <Col style={{ paddingLeft: 10, paddingRight: 10 }} >
                                                                <Text style={{ fontSize: 20 }}
                                                                    onPress={() => {
                                                                        // alert(rowID);
                                                                        this.state.selecteditem = rowID;
                                                                        this.popupDialog.show();
                                                                    }}>
                                                                    {data.nama}
                                                                </Text>
                                                            </Col>
                                                        </Row>
                                                        <Row style={{ paddingLeft: 10, paddingRight: 10 }}
                                                            onPress={() => {
                                                                this.state.selecteditem = rowID;
                                                                this.popupDialog.show();
                                                            }}>
                                                            <Col >
                                                                <Text numberOfLines={1} note style={styles.text}>
                                                                    {data.peritem}
                                                                </Text>
                                                            </Col>
                                                            <Col >
                                                                <Text style={styles.text}> x{data.kuantitas} </Text>
                                                            </Col>
                                                            <Col >
                                                                <Text style={[styles.text, { textAlign: 'right' }]}>
                                                                    {data.harga}
                                                                </Text>
                                                            </Col>
                                                        </Row>
                                                    </Grid>

                                                </ListItem>
                                            </View>
                                        }
                                    />

                                </ListItem>}
                            keyExtractor={data => data.id}
                        />
                    </View>
                </Content>
                <View >
                    <Button full style={styles.mb15}
                        onPress={() => this.props.navigation.navigate('Halaman')} >
                        <Text >BAYAR: {this.getTotal()} </Text>
                    </Button>
                </View>
            </Container>
        );
    }

}
// AppRegistry.registerComponent('BarcodeScannerApp', () => BarcodeScannerApp);
export default Keranjang;