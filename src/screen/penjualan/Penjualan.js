import React, { Component } from "react";
import {
  Text,
  Image,
} from "react-native";
import Searchbar from './Searchbar';

import {
  Input,
  Button,
  Col,
  Container,
  Content,
  List,
  ListItem,
  Body,
  Header,
  Left, Right,
  Grid, Row,
  Icon,
  Item, 
} from 'native-base';

import styles from './styles'


const datas = [
  { nama: "pasir lalalalalal",
      harga: "Rp 25.000",
      peritem: "Rp 5.000"
  },
  {  nama: "eskrim ayaaaamm",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
  { nama: "selada guuuuu",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
  {nama: "bakso",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
  { nama: "tuna",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
  {
      nama: "pisang",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
  {
      nama: "lala",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
  {
      nama: "lala",
      harga: "Rp 56.000",
      peritem: "Rp 5.000"
  },
]


class Penjualan extends Component {

  onPressDetail = () => {
    this.props.navigation.navigate('keranjang');
  }
  static navigationOptions = {
    drawerIcon: (
      <Icon name="ios-cart-outline" />
    )
  }

  render() {
    return (
      <Container>
        <Header style = {styles.headerback}>
                    <Left>
                        <Icon size={70}
                         name="arrow-back" onPress={
                            () => this.props.navigation.navigate('keranjang')} />
                    </Left>
                    <Body style={{width : '50%', backgroundColor : 'rebbecapurple'}}>
                        <Item >
                          <Icon active name = "search"/>
                          <Input placeholder = "Search"/>
                        </Item>
                      </Body>
                    
                </Header>

        <Content padder>
        <List 
        dataArray={datas} renderRow = {data =>
        <ListItem onPress= {()=>this.props.navigation.navigate('keranjang')}>
          <Left>
            <Text > 
            {data.nama}</Text>
          </Left>
          <Right>
            <Text> {data.peritem} </Text>
          </Right>
        </ListItem>}
/>

          
        </Content>


      </Container>
    );
  };
}
export default Penjualan;