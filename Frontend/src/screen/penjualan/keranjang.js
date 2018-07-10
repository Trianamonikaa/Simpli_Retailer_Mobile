'use strict';
import PopupDialog, { DialogButton } from 'react-native-popup-dialog';
import React, { Component, PropTypes } from "react";
import {
    Platform,
    Text,
    View,
    AppRegistry,
    Alert
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
const datas = [
    // {
    //     kuantitas: "5",
    //     nama: "pasir lalalalalal",
    //     harga: "Rp 25.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "9",
    //     nama: "eskrim ayaaaamm",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "8",
    //     nama: "selada guuuuu",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "66",
    //     nama: "bakso",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "34",
    //     nama: "tuna",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "5",
    //     nama: "pisang",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "5",
    //     nama: "lala",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "5",
    //     nama: "lala",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "5",
    //     nama: "cijjjj",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
    // {
    //     kuantitas: "5",
    //     nama: "dfsdfdsf",
    //     harga: "Rp 56.000",
    //     peritem: "Rp 5.000"
    // },
]
class Keranjang extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // inputNumber: 0,
            // selecteditem: {},
            torchMode: 'off',
            cameraType: 'back',
        }
    }
    barcodeReceived(e) {
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
    }
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
        this.state.selecteditem.kuantitas = number;
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
        datas.push(data);
    }
    render() {
        return (
            // <BarcodeScanner
            //     onBarCodeRead={this.barcodeReceived}
            //     style={{ flex: 1 }}
            //     torchMode={this.state.torchMode}
            //     cameraType={this.state.cameraType}
            // />
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
                    actions={[<DialogButton text="Oke" align="center" onPress={() => this.ubahkuantitas(this.state.inputNumber)} />]}

                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                >

                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ fontWeight: 'Bold', textAlign: 'center', fontSize: 22, paddingBottom: 5, paddingTop: 10, color: 'black' }}>Masukkan berapa banyak barang yang akan dibeli</Text>
                        <Form style={{ backgroundColor: 'white', alignItems: 'center' }} >
                            <Item regular style={{ backgroundColor: 'transparent', width: '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <Input style={{ textAlign: 'center', backgroundColor: 'lightgrey' }}
                                    keyboardType={'numeric'} placeholder="Jumlah barang" placeholderTextColor='grey'
                                    onChangeText={(inputNumber) => this.setState({ inputNumber })}

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

                            dataArray={datas}
                            renderRow={data =>
                                <ListItem
                                    style={styles.rowmenu}>
                                    <SwipeRow scrollEnabled={false}
                                        style={{ backgroundColor: 'white', paddingRight: 0, marginRight: 0, borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0, }}
                                        leftOpenValue={75}
                                        rightOpenValue={-75}
                                        left={

                                            <Button onPress={() => {
                                                this.state.selecteditem = data;
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
                                                                        this.state.selecteditem = data;
                                                                        this.popupDialog.show();

                                                                    }}>
                                                                    {data.nama}
                                                                </Text>
                                                            </Col>
                                                        </Row>
                                                        <Row style={{ paddingLeft: 10, paddingRight: 10 }}
                                                            onPress={() => {
                                                                this.state.selecteditem = data;
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
                        />
                    </View>
                </Content>
                <View >
                    <Button full style={styles.mb15}
                        onPress={() => this.props.navigation.navigate('Halaman')} >
                        <Text >BAYAR: </Text>
                    </Button>
                </View>
            </Container>
        );
    }

}
AppRegistry.registerComponent('BarcodeScannerApp', () => BarcodeScannerApp);
export default Keranjang;