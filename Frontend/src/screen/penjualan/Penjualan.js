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
    id: 1,
    nama: "pasir lalalalalal",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 2,
    nama: "eskrim ayaaaamm",
    harga: 0,
    peritem: 8000,
    kuantitas: 1
  },
  {
    id: 3,
    nama: "selada guuuuu",
    harga: 0,
    peritem: 6000,
    kuantitas: 1
  },
  {
    id: 4,
    nama: "bakso",
    harga: 0,
    peritem: 8000,
    kuantitas: 1
  },
  {
    id: 5,
    nama: "tuna",
    harga: 0,
    peritem: 3000,
    kuantitas: 1
  },
  {
    id: 6,
    nama: "pisang",
    harga: 0,
    peritem: 9000,
    kuantitas: 1
  },
  {
    id: 7,
    nama: "lala",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 8,
    nama: "lala",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
]


class Penjualan extends Component {

  
  static navigationOptions = {
    drawerLabel: () => null
  }
  // returnwithdata = (data) => {
  //   this.props.navigation.state.params.returnData(data);
  //   this.props.navigation.goBack();
  // }
  state = {
    datas,
  }
returnData(data ){
  this.props.navigation.navigate('Keranjang');
  // alert(data.nama)
  this.props.navigation.state.params.returnData;
  this.setState({data : data});
  this.returnData.bind(this);
  
}
  render() {
    const { datas } = this.state;
    let totalharga = 0;
    datas.forEach((data) => {
      totalharga += data.kuantitas * data.harga
    })
    return (
      <Container>
        <Header style={styles.headerback}>
          <Left style={{ backgroundColor: '#f06292', paddingLeft: 0, width: '10%' }}>
            <Icon size={40}
              style={{ paddingRight: 0 }}
              name="arrow-back" onPress={
                () => this.props.navigation.goBack()} />
          </Left>
          <Body style={{ width: '90%', backgroundColor: 'rebbecapurple' }}>
            <Item >
              <Icon
                active name="search" />
              <Input style={styles.headerback}
                placeholder="Search ..."  />
            </Item>
          </Body>
          <Right style={{ width: '0%' }}>
          </Right>
        </Header>

        <Content >
          <List style={{ backgroundColor: 'transparent', }}
            dataArray={datas} renderRow={data =>
              <ListItem style={{ backgroundColor: 'transparent', marginLeft: 0, paddingLeft: 8 }}
                onPress={() => this.returnData(data)}>
                <Left style={{ backgroundColor: 'transparent' }}>
                  <Text style={styles.text}>
                    {data.nama}</Text>
                </Left>
                <Right style={{ backgroundColor: 'transparent' }}>
                  <Text style={styles.text}> {data.peritem} </Text>
                </Right>
              </ListItem>}
          />


        </Content>


        <Text> {totalharga} </Text>
      </Container>
    );
  };
}
export default Penjualan;