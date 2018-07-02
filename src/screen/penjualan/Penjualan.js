import React, { Component } from "react";
import {
    Text,
    Image,
} from "react-native";
import Searchbar from './Searchbar';

import { Button, 
        Col, 
        Container, 
        Content, 
        Card, 
        CardItem,
        Body,
        Header,  
        Left, Right, 
        Grid, Row, 
        Icon} from 'native-base';

import styles from './styles'

import beras from '../../image/beras.jpg'


class Penjualan extends Component{
    
    onPressDetail=()=>{
        this.props.navigation.navigate('Halaman');
    }
    static navigationOptions = {  
        drawerIcon: (
            <Icon name = "ios-cart-outline"/>
        )
    }
    getName(){
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                    <Icon name="menu" onPress={
                        () => this.props.navigation.navigate('HalamanBayar')} />
                    </Left>
                    <Grid>
                        <Row style = {styles.row}>
                            <Col size={5}>
                                <Searchbar/>
                            </Col>
                            <Col  style = {styles.keranjang}>
                                <Icon name = "ios-cart-outline" onPress={
                                ()=> this.props.navigation.navigate('keranjang')} />                   
                            <Right/>
                            </Col>                   
                        </Row>
                    </Grid>                    
                </Header>
                {/* <Content style={styles.contentpenjualan}>   
                    <Button onPress={this.onPressDetail}>
                        <Text> BAYAR?</Text>
                    </Button>
                    <View>
                    </View>
                </Content> */}
                <Content padder>
                <Button onPress={()=> this.props.navigation.navigate('Halaman')}>
                <Text> BAYAR </Text><Right/>
                </Button>
          <Card style={styles.mb}>
            <Grid>
                <Row style = {styles.row}>
                    <Col style = {styles.imgOver}>
                    <CardItem>
              <Left>
                <Body>
                  <Text>BERAS PULEN</Text>
                  <Text note>Rp 80.000</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: 100,
                  height: 100,
                  flex: 1
                }}
                source={beras}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
                    </Col>
                    <Col>
                    <CardItem>
              <Left>
                <Body>
                  <Text>BERAS PULEN</Text>
                  <Text note>Rp 80.000</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 100,
                  flex: 1
                }}
                source={beras}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
                    </Col>
                </Row>
                <Row style = {styles.row}>
                <Col style = {styles.col}>
                    <CardItem>
              <Left>
                <Body>
                  <Text>BERAS PULEN</Text>
                  <Text note>Rp 80.000</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 100,
                  flex: 1
                }}
                source={beras}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
                    </Col>
                    <Col>
                    <CardItem>
              <Left>
                <Body>
                  <Text>BERAS PULEN</Text>
                  <Text note>Rp 80.000</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 100,
                  flex: 1
                }}
                source={beras}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
                    </Col>
                </Row>
            </Grid>
          </Card>
          </Content>


            </Container>
        );
    };
}
export default Penjualan;