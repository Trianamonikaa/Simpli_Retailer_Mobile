import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
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
    nama: "sample 1",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 2,
    nama: "sample 2",
    harga: 0,
    peritem: 8000,
    kuantitas: 1
  },
  {
    id: 3,
    nama: "sample 3",
    harga: 0,
    peritem: 6000,
    kuantitas: 1
  },
  {
    id: 4,
    nama: "sample 4",
    harga: 0,
    peritem: 8000,
    kuantitas: 1
  },
  {
    id: 5,
    nama: "sample 5",
    harga: 0,
    peritem: 3000,
    kuantitas: 1
  },
  {
    id: 6,
    nama: "sample 6",
    harga: 0,
    peritem: 9000,
    kuantitas: 1
  },
  {
    id: 7,
    nama: "sample 7",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 8,
    nama: "sample 8",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 9,
    nama: "sample 9",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 10,
    nama: "sample 10",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 11,
    nama: "sample 11",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 12,
    nama: "sample 12",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 13,
    nama: "sample 13",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 14,
    nama: "sample 14",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
  {
    id: 15,
    nama: "sample 15",
    harga: 0,
    peritem: 5000,
    kuantitas: 1
  },
]

class Penjualan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
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
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  backToKeranjang(data) {
    let OrderItem = this.props.navigation.getParam('OrderItem', 'default');
    OrderItem.push(data);
    this.props.navigation.navigate('Keranjang', { OrderItem: OrderItem });
  }
  render() {
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
                value={this.state.search}
                onChangeText={this.updateSearch.bind(this)}
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