import React, { Component } from "react";
import {
    View,
    Text,
    AppRegistry,
    Image, NavigatorIOS,
} from "react-native";
import Searchbar from './Searchbar'
import {
    Container,
    Content,
    Body,
    Header, ListItem, Thumbnail,
    Left,
    Right, Grid,
    Icon, Row,
    Title, navigation, Col
} from 'native-base'
import styles from './styles'
import crayon from '../../image/crayon.jpg'
import { List } from "react-native-elements";

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
                    <Left>
                        <Icon size={30}
                            name="arrow-back" onPress={
                                () => this.props.navigation.navigate('Produk')} />
                    </Left>
                    <Body style={{ width: '50%' }}>
                        <Title style={{ color: 'black' }}> Detail Produk </Title>
                    </Body>
                </Header>

                <Content>
                    <View style={styles.contentpicture}>
                        <Image source={crayon} style={styles.imageproduk} />
                    </View>
                    <View>
                        <Grid >
                            <Row >
                                <Col><Text> Nama barang </Text></Col>
                                <Col >
                                <Text style = {styles.textdetail}>:</Text></Col>
                                <Col ><Text> {detail.text}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Text> Harga Jual </Text></Col>
                                <Col><Text style = {styles.textdetail}>:</Text></Col>
                                <Col><Text> {detail.hargajual}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Text> Nama Beli </Text></Col>
                                <Col><Text style = {styles.textdetail}>:</Text></Col>
                                <Col><Text> {detail.hargabeli}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Text>Barang datang</Text></Col>
                                <Col><Text style = {styles.textdetail}>:</Text></Col>
                                <Col><Text> {detail.barangmasuk}</Text>
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