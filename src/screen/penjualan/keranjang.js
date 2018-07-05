'use strict';
import PopupDialog from 'react-native-popup-dialog';
import React, { Component} from "react";
import {
    Text, 
    View, 
    Alert, 
   
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
// import Barcode from 'react-native-smart-barcode'
// import Camera from 'react-native-camera';
// import PropTypes from 'prop-types';
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
    {
        kuantitas: "5",
        nama: "cijjjj",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "dfsdfdsf",
        harga: "Rp 56.000",
        peritem: "Rp 5.000"
    },
]
// const ScannerComponent = Platform.select({
//     android: () => require('react-native-barcode-scanner-google').default,
//     ios: () => require('react-native-camera').default
//   })();
// const cardImage = require("../../image/beras.jpg")
// class ScanScreen extends Component {
//     onSuccess(e) {
//       Linking
//         .openURL(e.data)
//         .catch(err => console.error('An error occured', err));
//     }}
    
class keranjang extends Component {
    onPresDetail
    static navigationOptions = {
        drawerLabel: () => null
    }
    constructor(props) {
        super(props);
        this.state = {
            inputNumber : 0,
            selecteditem : {}
        }
    }
    getName() {
        return Searchbar
    }
    ubahkuantitas(number){
        this.popupDialog.dismiss();
        this.state.selecteditem.kuantitas = number;
        // alert(number);

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
                <Header style = {styles.headerback}>
                    <Left>
                        <Icon size={70}
                         name="menu" onPress={
                            () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Body style={{width : '50%'}}>
                        <Title style={{color : 'black'}}> Keranjang Belanja </Title>
                    </Body>
                    <Right>
                        <Button style={{backgroundColor: 'papayawhip'}}
                            onPress={() => this.props.navigation.navigate('Penjualan')}
                        >
                            <Text style = {{fontSize : 18}}>Search</Text>
                        </Button>
                    </Right>
                </Header>
                <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                >
                    <View>
                        <Text>Masukkan berapa banyak barang yang akan dibeli</Text>
                        <Form >
                            <Item regular>
                                <Input keyboardType={'numeric'} placeholder="barang" 
                                onChangeText = {(inputNumber) => this.setState({inputNumber})}

                                    value={this.state.inputNumber}> 
                                </Input>
                            </Item>
                        </Form>
                        <Button onPress={() =>this.ubahkuantitas(this.state.inputNumber)}>
                            <Text>Submit</Text>
                        </Button>
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
                                        style={{ backgroundColor: 'white', paddingRight: 0, marginRight: 0 , borderBottomWidth : 0, marginBottom:0, paddingBottom:0,}}
                                        leftOpenValue={75}
                                        rightOpenValue={-75}
                                        left={

                                            <Button onPress={() => {
                                                this.state.selecteditem= data;
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
                                            <View noBorder={true} 
                                            style={{ backgroundColor: 'white', width: '100%', paddingLeft: 0,  margin: 0 , borderBottomWidth : 0, marginBottom:0, paddingBottom:0}}>

                                                <ListItem  noBorder={true}
                                                    
                                                >

                                                    <Grid >
                                                        <Row style={{height : 'auto', width: 'auto'}}>
                                                            <Col >
                                                                <Text style={{fontSize:20}}>
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
                        <Text style = {styles.text}>MAU BAYAR INI</Text>
                    </Button>
                </View>
            </Container>
        );
    }

}

export default keranjang;