import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Searchbar from './Searchbar';

import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
        Header,  Left, Right, Grid, Row, Icon, Form, Item, Input, Title, IconNB } from 'native-base';

class Penjualan extends Component{
    static navigationOptions = {
        drawerIcon: (
            <Icon name = "shop"/>
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
                <Icon name="ios-menu" onPress={
                    () => this.props.navigation.navigate('DrawerOpen')} />
                </Left>
                <Grid>
                    <Row style = {styles.row}>
                        <Col size={5}>
                            <Searchbar/>
                        </Col>
                        <Col size={1}>
                            <Icon name = "cart" style={styles.cart}/>                              
                        </Col>                   
                    </Row>
                </Grid>                    
            </Header>
            <Content style={styles.contentpenjualan}>
                
                <Button onPress={this.onPress}
                title="pindah ke halaman penjualan"
                color="#f00">
                    <Text> light </Text>
                </Button>
                <View style={styles.container}>
                    <Text
                        style={styles.welcome}
                        // onPress={() => Actions.Halaman()}
                        >
                        TAMPILAN PENJUALAN
                    </Text>
                    </View>
                            </Content>

                        </Container>
        );
    };
}

const styles = StyleSheet.create({
    Searchbar: {
      backgroundColor: "#FFF",
      width : 500,
    },
        col: {
            // paddingHorizontal: 5,
            backgroundColor:'white',
            width:'80%'
        },
      col1: {
        // paddingHorizontal: 1,
        backgroundColor:'blue',
        width:'20%'
      },
      row: {
        paddingBottom: 5,
      },
      iconText: {
        fontSize: 12,
      },
      mbl15:{
          marginBottom : 20,
          backgroundColor: 'red',
          width: 80,
          height: 50
      },
      cart:{

      },
      contentpenjualan:{ 
          backgroundColor: 'white', 
          padding:0, 
          opacity : 120 
        },
    imageicon:{
        width: 24,
        height: 24
    }
   
});


export default Penjualan;