'use strict';
import PopupDialog from 'react-native-popup-dialog';
import React, { Component, PropTypes } from "react";
import {
    Text, 
    View, 
    Alert, 
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Linking
} from "react-native";
import Searchbar from './Searchbar'
import {
    Button,
    Icon,
    Container,
    Content,
    Body,
    Header,
    Left,
    Title, List, ListItem,
    SwipeRow,
    Form, Input, Item, Grid, Row, Col
} from 'native-base'
import styles from './styles'
// import QRCodeScanner from 'react-native-qrcode-scanner';
const datas = [
    {
        kuantitas: "5",
        nama: "pasir lalalalalal",
        harga: "Rp 25.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "9",
        nama: "eskrim ayaaaamm",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "8",
        nama: "selada guuuuu",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "66",
        nama: "bakso",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "34",
        nama: "tuna",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "pisang",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "lala",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "lala",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
]
const cardImage = require("../../image/beras.jpg")
class ScanScreen extends Component {
    onSuccess(e) {
      Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err));
    }}
class keranjang extends Component {
    onPresDetail
    static navigationOptions = {
        drawerLabel: () => null
    }
    constructor(props) {
        super(props)
    }
    getName() {
        return Searchbar
    }
    deleteRow(item) {
        // lakukan delete item
      }
    showalert(title,msg, item ){
        Alert.alert(
            title,
            msg,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            
              {text: 'OK', onPress: () => this.deleteRow(item)}
            ],
            { cancelable: false }
          )
    }
    render() {
        return (
            <Container >
                <Header>
                    <Left>
                        <Icon name="menu" onPress={
                            () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Body>
                        <Title> Keranjang Belanjaan </Title>
                    </Body>
                </Header>
                <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                >
                    <View>
                        <Text>Masukkan berapa banyak barang yang akan dibeli</Text>
                        <Form >
                            <Item regular>
                                <Input keyboardType={'numeric'} placeholder="barang"> </Input>
                            </Item>
                        </Form>
                        <Button onPress={() => this.props.navigation.navigate('Halaman')}>
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </PopupDialog>
                <Content style={{
                    backgroundColor: 'transparent',
                }}
                    padder>
                    {/* <QRCodeScanner style={{width : 100}}
                        onRead={this.onSuccess.bind(this)}
                        topContent={
                            <Text style={styles.centerText}>
                                Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> 
                                on your computer and scan the QR code.
                            </Text>
                        }
                        bottomContent={
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <Text style={styles.buttonText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        }
                    /> */}
                    <View style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}   >
                        <List scrollEnabled={false}
                            style={styles.listkeranjang}

                            dataArray={datas}
                            renderRow={data =>
                                <ListItem
                                    style={{ backgroundColor: 'white', paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0 }}>
                                    <SwipeRow scrollEnabled={false}
                                        style={{ backgroundColor: 'white', paddingRight: 0, marginRight: 0 }}
                                        leftOpenValue={75}
                                        rightOpenValue={-75}
                                        left={

                                            <Button onPress={() => {
                                                this.popupDialog.show();
                                            }}
                                            >
                                                <Icon active name="add" style={{ color: "#FFF" }} />
                                            </Button>
                                        }

                                        right={
                                            
                                            <Button danger >
                                                <Icon active name="trash" onPress={() => this.showalert("Delete Confirmation","Delete " + data.nama +"?", data)} />

                                            </Button>
                                        }
                                        body={
                                            <View style={{ backgroundColor: 'white', width: '100%', paddingLeft: 0,  margin: 0 }}>

                                                <ListItem avatar noBorder={true}
                                                    style={{
                                                        paddingBottom: 0, paddingTop: 0, paddingRight: 0
                                                    }}
                                                >

                                                    <Grid>
                                                        <Row>
                                                            <Col style={{ width: '70%' }}>

                                                                <Text style={styles.text}>
                                                                    {data.nama}
                                                                </Text>
                                                            </Col>

                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Text numberOfLines={1} note style={styles.text}>
                                                                    {data.peritem}
                                                                </Text>
                                                            </Col>
                                                            <Col>
                                                                <Text style={styles.text}> x{data.kuantitas} </Text>
                                                            </Col>
                                                            <Col>
                                                                <Text style={styles.text}>
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
                        <Text>MAU BAYAR INI</Text>
                    </Button>
                </View>
            </Container>
        );
    }

}

export default keranjang;