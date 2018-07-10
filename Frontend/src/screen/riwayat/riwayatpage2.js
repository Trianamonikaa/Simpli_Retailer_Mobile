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
} from 'native-base'

import styles from './styles'


const data = [
    {
        nama: "Beras",
        harga: "Rp 98.000"
    },
    {
        nama: "Susu",
        harga: "Rp 66.000"
    },
    {
        nama: "Pasir",
        harga: "Rp 104.000"
    }
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
            <Container>
                <Header style={styles.headerback}>
                    <Left>
                        <Icon size={30}
                            name="arrow-back" onPress={
                                () => this.props.navigation.navigate('Riwayat')} />
                    </Left>
                    <Body style={{ width: '50%' }}>
                        <Title style={{ color: 'black' }}> Detail Transaksi </Title>
                    </Body>
                </Header>
                <Content style={{ backgroundColor: 'transparent' }}>
                    <Text style={styles.text}> ID ORDER : 02-07-242</Text>
                    <Text style={styles.text}> TANGGAL : 02-07-2018</Text>
                    <Text style={styles.text}>  PEMBAYARAN : CASH</Text>
                    <Text style={styles.text}> DAFTAR BELANJA</Text>
                    <List style={{ backgroundColor: 'transparent' }}
                        dataArray={data}
                        renderRow={data =>
                            <ListItem noBorder={true}
                                style={{ backgroundColor: 'transparent', paddingBottom: 0, paddingTop: 0 }}>
                                <Body style={{ backgroundColor: 'transparent' }}>
                                    <View >
                                        <Grid>
                                            <Row >
                                                <Col>
                                                    <Text style={styles.textleft}>{data.nama}</Text>
                                                </Col>
                                                <Text style={styles.textright}>{data.harga}</Text>
                                            </Row>
                                        </Grid>
                                    </View>
                                </Body>
                            </ListItem>
                        } />
                    <ListItem style={{ backgroundColor: 'transparent' }}>
                        <Body style={{ borderTopWidth: 3, backgroundColor: 'transparent' }}>
                            <View style={styles.riwayatitem}>
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Text style={styles.textleft}>Total Harga</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.textright}>Rp 268.000</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text style={styles.textleft}>Diskon</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.textright}>Rp 268.000</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text style={styles.textleft}>Pajak</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.textright}>Rp 268.000</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text style={styles.textleft}>Tunai</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.textright}>Rp 268.000</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text style={styles.textleft}>Kembali</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.textright}>Rp 268.000</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            </View>
                        </Body>
                    </ListItem>
                </Content>

            </Container>
        );
    }
}

export default riwayatpage2;