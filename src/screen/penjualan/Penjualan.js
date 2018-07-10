import React, { Component } from "react";
import {
  Text,
  Image,
} from "react-native";

import {
  Input,
  Container,
  Content,
  List,
  ListItem,
  Body,
  Header,
  Left, Right,
  Icon,
  Item,
} from 'native-base';

import styles from './styles'


const datas = [
  {
    nama: "pasir lalalalalal",
    harga: 25000,
    peritem: 5000,
    kuantitas : "6"
  },
  {
    nama: "eskrim ayaaaamm",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "7"
  },
  {
    nama: "selada guuuuu",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "12"
  },
  {
    nama: "bakso",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "3"
  },
  {
    nama: "tuna",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "11"
  },
  {
    nama: "pisang",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "9"
  },
  {
    nama: "lala",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "22"
  },
  {
    nama: "lala",
    harga: "Rp 56.000",
    peritem: "Rp 5.000",
    kuantitas : "8"
  },
]


class Penjualan extends Component {

  onPressDetail = () => {
    this.props.navigation.navigate('Keranjang');
  }
  static navigationOptions = {
    drawerLabel: () => null
  }
  returnwithdata = (data) => {
    this.props.navigation.state.params.returnData(data);
    this.props.navigation.goBack();
  }
 
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'pink' }}>
          <Left style={{ backgroundColor: 'pink', paddingLeft: 0, width: '10%' }}>
            <Icon size={40}
              style={{ paddingRight: 0 }}
              name="arrow-back" onPress={
                () => this.props.navigation.goBack()} />
          </Left>
          <Body style={{ width: '90%', backgroundColor: 'rebbecapurple' }}>
            <Item >
              <Icon
                active name="search" />
              <Input style={{ backgroundColor: 'pink', alignContent: 'center', fontSize: 20, width: '100%' }}
                placeholder="Search ..." />
            </Item>
          </Body>
          <Right style={{ width: '0%' }}>
          </Right>
        </Header>

        <Content >
          <List style={{ backgroundColor: 'transparent', }}
            dataArray={datas} renderRow={data =>
              <ListItem style={{ backgroundColor: 'transparent', marginLeft: 0, paddingLeft: 8 }}
                onPress={() => this.returnwithdata(data)}>
                <Left style={{ backgroundColor: 'transparent' }}>
                  <Text style={styles.text}>
                    {data.nama}</Text>
                </Left>
                <Right style={{ backgroundColor: 'transparent' }}>
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