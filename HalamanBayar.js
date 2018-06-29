import React, {Component } from "react";
import {
    Text,
} from "react-native";
import Searchbar from './Searchbar'
import { 
        Col, 
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
        } from 'native-base'


import { Icon } from 'react-native-elements';
import styles from './styles';


class HalamanBayar extends Component {
    onPresDetail 
    static navigationOptions = {
        drawerLabel: ()=> null
    }
    constructor(){
        super()
    }
    getName(){
        
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Icon name="arrow-back" onPress={
                        () => this.props.navigation.navigate('keranjang')} />
                    </Left>
                    <Body>
                        <Title> Halaman Bayar </Title>
                        <Right/>
                    </Body>
                    </Header>                

                <Content padder>
                <Grid>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Cash
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Form>
                                <Item regular>
                                <Input keyboardType={'numeric'} placeholder="Harga"/>
                                </Item>
                        
                            </Form>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Kartu Kredit
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Form>
                                <Item regular>
                                <Input  keyboardType={'numeric'} placeholder="Harga"/>
                                </Item>
                        
                            </Form>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Debit
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Form>
                                <Item regular>
                                <Input keyboardType={'numeric'}  placeholder="Harga" />
                                </Item>
                        
                            </Form>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Total Harga
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Text style={styles.text}>
                                Rp 54.000
                            </Text>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Diskon
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Text style={styles.text}>
                                Rp 54.000
                            </Text>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Pajak
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Text style={styles.text}>
                                Rp 54.000
                            </Text>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Tunai
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Text style={styles.text}>
                                Rp 54.000
                            </Text>
                        </Col>
                    <Right/>
                    </Row>
                    <Row>
                        <Col>
                        <Left>
                            <Text style={styles.text}>
                                Kembali
                            </Text>
                            </Left>
                        </Col>
                        <Col>
                            <Text style={styles.text}>
                                Rp 46.000
                            </Text>
                        </Col>
                    <Right/>
                    </Row>
                </Grid>
                </Content>

            </Container>
        );
    }

}

export default HalamanBayar;