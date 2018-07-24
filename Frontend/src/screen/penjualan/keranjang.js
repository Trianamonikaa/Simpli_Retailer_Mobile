'use strict';

import PopupDialog, { DialogButton, SlideAnimation  } from 'react-native-popup-dialog';
import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    Alert,
    AsyncStorage,
    AppRegistry,
} from "react-native";
import Searchbar from './Searchbar';
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
    Col,
    Thumbnail
} from 'native-base'
import styles from './styles'
const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
  });

class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {

            torchMode: 'off',
            cameraType: 'back',
            qrcode: '',
            inputNumber: 0,
            selecteditem: 0,
            number: '',
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
        console.log(this.props.navigation.getParam('OrderItem', []));
        let OrderItem = this.props.navigation.getParam('OrderItem', []);
        OrderItem.forEach(item => {
            item.harga = item.peritem * item.kuantitas;
            this.state.Order.OrderItem.push(item);
        });
        this.setState({Order:this.state.Order});
        console.log(this.state.Order.OrderItem);

        // if (props.navigation.state.params  != undefined) {
        //     if (props.navigation.state.params.Order  != undefined) {
        //         // alert(this.props.navigation.state.params.Order.Status)
        //         this.setState({ Order: props.navigation.state.params.Order });
        //         // alert(props.navigation.state.params.Order.OrderItem[0].nama);
        //         alert(this.state.Order.OrderItem[0].nama);
        //         // alert(this.state.Order.Status);
        //     }
        // }
        // AsyncStorage.setItem('Order', JSON.stringify(this.state.Order), () => {
        //     if (props.navigation.state.params != undefined) {
        //         this.setState({ Order: props.navigation.state.params.Order });
        //         AsyncStorage.mergeItem('Order', JSON.stringify(props.navigation.state.params.Order), () => {
        //             AsyncStorage.getItem('Order', (err, result) => {
        //                 console.log(result);
        //             })
        //         })
        //     }
        // })

    }

    // barcodeReceived(e) {
    //     console.log('Barcode: ' + e.data);
    //     console.log('Type: ' + e.type);
    // }

    // saveData() {
    //     let number = this.state.inputNumber;
    //     this.setState({
    //         number: number
    //     })
    //     alert('Data tersimpan');
    // }
    // ubahkuantitas = (number) => {
    //     const { inputNumber } = this.state;
    //     this.state.Order.OrderItem[this.state.selecteditem].kuantitas = number;
    //     alert(this.state.Order.OrderItem[this.state.selecteditem].kuantitas);
    // }

    // saveData() {
    //     let number = this.state.inputNumber;
    //     this.setState({
    //         number: number
    //     })
    //     alert('Data tersimpan');
    // }
    ubahkuantitas(){
        console.log(this.state.inputNumber + " Ubah < Kuantitas");
        console.log(this.state.selecteditem + " < Index");
        // this.popupDialog.dismiss();
        // this.render();
        // if (this.PopupDialog) {
        //     this.PopupDialog.dismiss();
        // }
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name="cart" />
        )
    }
    getName() {
        return Searchbar
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

    // returnData(data) {
    //     alert('returnData');
    //     this.state.Order.OrderItem.push(data);
    //     this.state.Order.TotalHarga = 0;
    //     this.state.Order.OrderItem.forEach((data) => {
    //         data.harga = data.kuantitas * data.peritem;
    //         this.state.Order.TotalHarga += data.harga;
    //     })
    // }
    // returnData(data) {
    //     return data;
    //     alert(data.nama)
    // }
    getTotal() {
        return this.state.Order.TotalHarga;
    }
    render() {
        // return (
        console.log("called");
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
                        <Title style={{ color: 'black' }}> Keranjang </Title>
                    </Body>
                    <Right style={{ width: '10%' }}>
                        <Button style={{ backgroundColor: 'papayawhip' }}

                            // onPress={() => this.props.navigation.navigate('Penjualan', { Order: this.state.Order })}

                            onPress={() => this.props.navigation.navigate('Penjualan', {OrderItem:this.state.Order.OrderItem} )}

                        >
                            <Icon name="search" style={{ color: 'darksalmon' }}>
                            </Icon>
                        </Button>
                    </Right>
                </Header>
                <PopupDialog
                    height={200}
                    actions={[<DialogButton text="Oke" align="center" 
                    onPress={() => this.ubahkuantitas()} />]}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={slideAnimation}>
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
                                    onChangeText={(inputNumber) => this.setState({ inputNumber })}>
                                </Input>
                            </Item>
                        </Form>
                    </View>
                </PopupDialog>
                {/* <BarcodeScanner
                    onBarCodeRead={this.barcodeReceived}
                    style={{ flex: 1 }}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                /> */}
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
                                                // this.state.selecteditem = rowID;
                                                // this.popupDialog.show();
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
                                                    <Grid
                                                        onPress={() => {
                                                            // this.state.selecteditem = rowID;
                                                            // this.popupDialog.show();
                                                        }}
                                                        style={{ backgroundColor: 'transparent', paddingBottom: 0, paddingTop: 0, marginBottom: 0, marginTop: 0, marginLeft: 10 }}>
                                                        <Row>
                                                            <Col style={{ paddingLeft: 10, paddingRight: 10 }} >
                                                                <Text style={styles.text}
                                                                    onPress={() => {
                                                                        // alert(rowID);
                                                                        // this.state.selecteditem = rowID;
                                                                        // this.popupDialog.show();
                                                                    }}>
                                                                    {data.nama}
                                                                </Text>
                                                            </Col>
                                                        </Row>
                                                        <Row style={{ paddingLeft: 10, paddingRight: 10 }}>
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
                        onPress={() => this.props.navigation.navigate('Halaman', this.state.Order)} >
                        <Text style={{ color: 'black' }}>BAYAR: {this.getTotal()} </Text>
                    </Button>
                </View>
            </Container>
        );
    }
    // componentDidMount() {
    //     let viewAppearCallBack = (event) => {
    //         this.setTimeout( () => {
    //             this.setState({
    //                 viewAppear: true,
    //             })
    //         }, 255)

    //     }
    //     this._listeners = [
    //         this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack)
    //     ]

    // }
    // componentWillUnmount () {
    //     this._listeners && this._listeners.forEach(listener => listener.remove());
    // }

    // _onBarCodeRead = (e) => {
    //     console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
    //     this._stopScan()
    //     Alert.alert(e.nativeEvent.data.type, e.nativeEvent.data.code, [
    //         {text: 'OK', onPress: () => this._startScan()},
    //     ])
    // }

    // _startScan = (e) => {
    //     this._barCode.startScan()
    // }

    // _stopScan = (e) => {
    //     this._barCode.stopScan()
    // }
}
export default Keranjang;