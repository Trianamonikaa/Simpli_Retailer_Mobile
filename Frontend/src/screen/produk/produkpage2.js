import React, { Component } from "react";
import {
    View,
    Text,
    Image,
} from "react-native";
import Searchbar from './Searchbar'
import {
    Container,
    Content,
    Body,
    Header,
    Left,
    Grid,
    Icon,
    Row,
    Title,
    Col,
    Right
} from 'native-base'
import styles from './styles'
import crayon from '../../image/crayon.jpg'

class produkpage2 extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name="ios-cart-outline" />
        )
    }
    static navigationOptions = {
        drawerLabel: () => null
    }
    getName() {

        return Searchbar
    }
    constructor(props) {
        super(props);
        // alert(this.props.id);
    }
    render() {
        const detail = this.props.navigation.getParam('data1', {});
        // alert(id);
        return (
            <Container>
                <Header style={styles.headerback}>
                    <Left style={{ width: '10%' }}>
                        <Icon size={30}
                            name="arrow-back" onPress={
                                () => this.props.navigation.navigate('Produk')} />
                    </Left>
                    <Body style={{ width: '80%' }}>
                        <Title style={{ color: 'black' }}> Detail Produk </Title>
                    </Body>
                    <Right style={{ width: '10%' }}>
                    </Right>
                </Header>

                <Content>
                    <View 
                    style={styles.contentpicture }>
                        <Image source={detail.img} style={styles.imageproduk} />
                    </View>
                    <View>
                        <Grid noBorder = {true} >
                            <Row >
                                <Col>
                                    <Text style={[styles.text, {fontWeight : 'bold'}]}>Nama barang
                                </Text>
                                </Col>
                                <Col style={styles.col2} >
                                    <Text style={styles.textdetail}>:</Text></Col>
                                <Col style={styles.col3}><Text style={styles.text}> {detail.text}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={styles.col1}><Text style={[styles.text, {fontWeight : 'bold'}]}>Harga Jual </Text></Col>
                                <Col style={styles.col2}><Text style={styles.textdetail}>:</Text></Col>
                                <Col style={styles.col3}><Text style={styles.text}> Rp {detail.hargajual}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={styles.col1}><Text style={[styles.text, {fontWeight : 'bold'}]}>Harga Beli </Text></Col>
                                <Col style={styles.col2}><Text style={styles.textdetail}>:</Text></Col>
                                <Col style={styles.col3}><Text style={styles.text}> Rp {detail.hargabeli}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={styles.col1}><Text style={[styles.text, {fontWeight : 'bold'}]}>Barang datang</Text></Col>
                                <Col style={styles.col2}><Text style={styles.textdetail}>:</Text></Col>
                                <Col style={styles.col3}><Text style={styles.text}> {detail.barangmasuk}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={styles.col1}><Text style={[styles.text, {fontWeight : 'bold'}]}>Nomor Produksi</Text></Col>
                                <Col style={styles.col2}><Text style={styles.textdetail}>:</Text></Col>
                                <Col style={styles.col3}><Text style={styles.text}> {detail.barangmasuk}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={styles.col1}><Text style={[styles.text, {fontWeight : 'bold'}]}>Perusahaan</Text></Col>
                                <Col style={styles.col2}><Text style={styles.textdetail}>:</Text></Col>
                                <Col style={styles.col3}><Text style={styles.text}> {detail.barangmasuk}</Text>
                                </Col>
                            </Row>

                        </Grid>
                    </View>


                </Content>

            </Container>
        );
    }
}

export default produkpage2;