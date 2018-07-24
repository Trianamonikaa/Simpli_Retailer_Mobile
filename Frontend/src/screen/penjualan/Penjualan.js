import React, { Component } from "react";
import {
  Text,
  AsyncStorage,
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
  constructor(props) {
    super(props);
    this.state = {
      Order: {
        Id: '1',
        OrderNo: '1',
        OrderDate: '00000',
        Status: 'Hayo kenapa gabisa hayoooOOOO',
        Type: 'ok',
        Description: 'ok',
        CreatedTime: '1',
        TotalHarga: 0,
        ModifiedTime: '1',
        ModifiedBy: '0',
        Cashier: '34',
        OrderItem: []
      }
    }
    // alert(props.navigation.state.params.Order.Id);
    // if ( props.navigation.state.params.Order != undefined ){
    //             // alert(this.props.navigation.state.params.Order.Status);
    //             this.setState({Order : props.navigation.state.params.Order})
    //             // alert(this.state.Order.Status);
    // }
    // AsyncStorage.setItem('Order', JSON.stringify(this.state.Order), () => {
    //   if (props.navigation.state.params != undefined) {
    //     this.setState({ Order: props.navigation.state.params.Order });
    //     AsyncStorage.mergeItem('Order', JSON.stringify(props.navigation.state.params.Order), () => {
    //       AsyncStorage.getItem('Order', (err, result) => {
    //         console.log(result);
    //       })
    //     })
    //   }
    // })
    console.log(this.props.navigation.getParam('OrderItem', 'default'));
  }
  static navigationOptions = {
    drawerLabel: () => null
  }
  // returnwithdata = (data) => {
  //   // alert(this.state.Order.Id);
  //   this.state.Order.OrderItem.push(data);
  //   // alert(this.state.Order.OrderItem[0].nama);

  //   // alert(this.state.Order.OrderItem[0].nama);
  //   this.setState({Order : this.state.Order});
  //   // alert(this.state.Order.OrderItem[0].nama);
  //   // alert(this.state.Order.Status);
  //   this.props.navigation.navigate('Keranjang', { Order : this.state.Order });
  //   // this.props.navigation.state.params.returnData(data);
  //   // this.props.navigation.goBack();
  //   // // alert('returnwithdata');
  //   // alert(this.props.navigation.toString());
  // }
  state = {
    datas,
  }

  backToKeranjang(data) {
    let OrderItem = this.props.navigation.getParam('OrderItem', 'default');
    OrderItem.push(data);
    this.props.navigation.navigate('Keranjang', {OrderItem:OrderItem} );
  }
  render() {

    // alert(this.state.Order.Status);
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

                // onPress={() => this.props.navigation.navigate('Keranjang')}>
                

                onPress={() => this.backToKeranjang(data)}>
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

      </Container>
    );
  };
}
export default Penjualan;