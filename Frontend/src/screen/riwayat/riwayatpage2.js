import React, { Component } from "react";
import {
    Text, View

} from "react-native";
import Searchbar from './Searchbar'
import {
    Container,
    Content,
    Body,
    Header,
    Left,
    Title,
    List,
    ListItem,
    Grid,
    Col,
    Row,
    Icon,
    Right
} from 'native-base'

import styles from './styles'


const datas = [
    {
        nama: "Beras",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "Susu",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "Pasir",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "lala",
        harga: 0,
        kuantitas: 1
    },

    {
        nama: "Ikan",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "yeye",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "yuyu",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "yiyi",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "yoyo",
        harga: 0,
        kuantitas: 1
    },
    {
        nama: "tutu",
        harga: 0,
        kuantitas: 1
    },

]
class riwayatpage2 extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    }
    getName() {
        return Searchbar
    }
    render() {
        return (
            <Container style={{backgroundColor : '#f8bbd0'}}>
                <Header style={styles.headerback}>
                    <Left style={{ width: '10%' }}>
                        <Icon size={30}
                            name="arrow-back" onPress={
                                () => this.props.navigation.navigate('Riwayat')} />
                    </Left>
                    <Body style={{ width: '80%' }}>
                        <Title style={{ color: 'black' }}> Detail Transaksi </Title>
                    </Body>
                    <Right style={{ width: '10%' }}>
                        
                    </Right>
                </Header>
                <Content style={{ backgroundColor: 'white', marginLeft : 10, marginRight : 10, borderWidth : 1, borderColor : "#f8bbd0"  }}>
                    <Grid >
                        <Row style={{ borderColor: 'grey', borderBottomWidth : 1}}>
                            <Text style={styles.text}> Detail Transaksi </Text>
                        </Row>
                        <Row style={{ borderColor: 'grey', borderWidth: 0, borderTopWidth: 0 }}>
                            <Col style={{ width: '30%', borderColor: 'black', borderEndWidth : 1 }}>
                                <Text style={styles.text}> ID Order </Text>
                            </Col>
                            <Col style={{ width: '70%' }}>
                                <Text style={styles.text}> 09234</Text>
                            </Col>
                        </Row>
                        <Row style={{ borderColor: 'grey', borderWidth: 1, borderTopWidth: 0 }}>
                            <Col style={{ width: '30%', borderColor: 'black',borderTopWidth : 1, borderEndWidth : 1  }}>
                                <Text style={styles.text}> Tanggal </Text>
                            </Col>
                            <Col style={{ width: '70%', borderTopWidth : 1 }}>
                                <Text style={styles.text}>12 Juli 2018</Text>
                            </Col>
                        </Row>
                        <Row style={{ borderColor: 'grey', borderWidth: 1, borderTopWidth: 0 }}>
                            <Col style={{ width: '30%', borderColor: 'grey', borderEndWidth: 1 }}>
                                <Text style={styles.text}> Pembayaran </Text>
                            </Col>
                            <Col style={{ width: '70%' }}>
                                <Text style={styles.text} > Uang tunai ( 54000 )</Text>
                                <Text style={styles.text}> Debit (12000 )</Text>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid style={{ backgroundColor: 'transparent' }}>
                        <Row noBorder={true}
                            styles={{ paddingBottom: 0, backgroundColor: 'blue', paddingBottom: 0 }}>
                            <Text style={[styles.text, { color: 'red' }]}> Daftar Belanja </Text>
                        </Row>
                        <List
                            dataArray={datas}
                            renderRow={data =>
                                <ListItem noBorder={true}
                                    style={{ paddingBottom: 5, paddingTop: 9, borderWidth: 0 }}>
                                    <Row style={{ paddingBottom: 0, paddingTop: 0 }}>
                                        <Col >
                                            <Text style={styles.textleft}>{data.nama}</Text>
                                        </Col>
                                        <Col><Text style={styles.text}>x{data.kuantitas}</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.textright}> {data.harga}
                                            </Text>
                                        </Col>
                                    </Row>
                                </ListItem>}
                        />
                        <Row style = {{borderTopWidth:1, paddingBottom : 8}}>
                            <Col style={{ marginLeft: 20 }}>
                                <Text style={[styles.textleft , {style :'bold'}]}>Total Harga</Text>
                            </Col>
                            <Col style={{ marginRight: 18 }}>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </Col>
                        </Row>
                        <Row style = {{borderTopWidth:1, paddingBottom : 8}}>
                            <Col style={{ marginLeft: 20 }}>
                                <Text style={styles.textleft}>Diskon</Text>
                            </Col>
                            <Col style={{ marginRight: 18 }}>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </Col>
                        </Row>
                        <Row style = {{borderTopWidth:1, paddingBottom : 8}}>
                            <Col style={{ marginLeft: 20 }}>
                                <Text style={styles.textleft}>Pajak</Text>
                            </Col>
                            <Col style={{ marginRight: 18 }}>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </Col>
                        </Row>
                        <Row style = {{borderTopWidth:1, paddingBottom : 8}}>
                            <Col style={{ marginLeft: 20 }}>
                                <Text style={styles.textleft}>Tunai</Text>
                            </Col>
                            <Col style={{ marginRight: 18 }}>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </Col>
                        </Row>
                        <Row style = {{borderTopWidth:1, paddingBottom : 8}}>
                            <Col style={{ marginLeft: 20 }}>
                                <Text style={styles.textleft}>Kembali</Text>
                            </Col>
                            <Col style={{ marginRight: 18 }}>
                                <Text style={styles.textright}>Rp 268.000</Text>
                            </Col>
                        </Row>
                    </Grid>


                </Content>

            </Container>
        );
    }
}

export default riwayatpage2;