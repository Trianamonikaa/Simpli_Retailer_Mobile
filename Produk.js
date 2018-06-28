import React, {Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Searchbar from './Searchbar'
import { Button, Col, Container, Content, DeckSwiper, Card, CardItem, Thumbnail, Body,
    Header,  Left, Right, Grid, Row, Form,Icon, Item, Input, Title, IconNB, } from 'native-base'
import produk from './src/image/produk.png';

class Produk extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name = "shop"/>
        )
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
                    <Icon name="ios-menu" onPress={
                        () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Grid>
                        <Row style = {styles.row}>
                            <Col size={5}>
                                <Searchbar/>
                            </Col>
                            
                    
                        </Row>
                    </Grid>
                </Header>

                <Content style={styles.contentpenjualan}>
                    <Button light>
                        <Text> light </Text>
                    </Button>
                    <Text> halaman produk </Text>
                </Content>

            </Container>
        );
    }

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
          
        },
        imageicon: {
            width :24,
            height: 24
        }

   
   
    
});
export default Produk;