import React, {Component } from "react";
import {
    View,
    
} from "react-native";

import { Button, 
        Container, 
        Content, 
        Thumbnail, 
        Body,
        Header,  
        Left, 
        Right, 
        Grid, 
        Row,
        Icon,
        List,
        ListItem,
        Text, 
        Col,} from 'native-base'
import Searchbar from './Searchbar'

import styles from './styles'
const beras = require("../../image/beras.jpg");

const datas =[
    {
        img: beras,
        text: "BERAS",
        note: "Ini adalah beras yang berasal dari padi. ."
    }
]

class Produk extends Component {
    onPressDetail=()=>{
        this.props.navigation.navigate('produkpage2');
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name = "cart"/> 
        ), 
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
                   
                    <View>
                    <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Button onPress={this.onPressDetail}>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
                       </View> 
                </Content>

            </Container>
        );
    }

}

export default Produk;