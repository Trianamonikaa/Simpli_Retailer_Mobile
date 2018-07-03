// import PopupDialog from 'react-native-popup-dialog'
import React, { Component } from "react";
import {
    Text, Image, View
} from "react-native";
import Searchbar from './Searchbar'
import {
    Button,
    Icon,
    Container,
    Card,
    CardItem,
    Content,
    Body,
    Header,
    Left,
    Right,
    Title, List, ListItem,
    SwipeRow,
    Form, Input
} from 'native-base'
import styles from './styles'

const datas = [
    {
        kuantitas: "5",
        nama: "susu",
        harga: "Rp 25.000",
        peritem : "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "susu",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "susu",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "susu",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
    {
        kuantitas: "5",
        nama: "lala",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
    
    {
        kuantitas: "5",
        nama: "lala",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
    
    {
        kuantitas: "5",
        nama: "lala",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
    
    {
        kuantitas: "5",
        nama: "lala",
        harga: "Rp 56.000",
        peritem : "Rp 5.000"
    },
]
const cardImage = require("../../image/beras.jpg")
class keranjang extends Component {
    onPresDetail
    static navigationOptions = {
        drawerLabel: () => null
    }
    constructor() {
        super()
    }
    getName() {
        return Searchbar
    }
    render() {
        return (
            <Container style={styles.conatiner}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={
                            () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Body>
                        <Title> Keranjang Belanjaan </Title>
                    </Body>
                </Header>

                <Content style={{   backgroundColor: 'transparent',
                                }}
                padder>
                
                    <Card style={styles.mb}>
                        <CardItem cardBody>
                            <Image
                                style={{
                                    width : 390,
                                    height : 300,
                                    
                                }}
                                source={cardImage}
                            />
                        </CardItem>
                    </Card>
                    <View 
                                >
                    <List scrollEnabled={false}
                        style={styles.listkeranjang}
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem >
                                <SwipeRow scrollEnabled={false}
                                    leftOpenValue={75}
                                    rightOpenValue={-75}
                                    left={

                                        <Button success onPress={() => alert("Trash")
                                            // this.popupDialog.show();
                                        }>
                                            <Icon active name="add" style={{ color: "#FFF" }} />
                                        </Button>
                                        
                                        
                                    }
                                    right={
                                        <Button danger onPress={() => alert("Trash")}>
                                            <Icon active name="trash" />
                                        </Button>
                                    }
                                    body={
                                        <View style={{ paddingLeft: 20, width: 350 }}>

                                            <ListItem avatar>
                                                <Left>
                                                    <Text> {data.kuantitas} </Text>
                                                </Left>
                                                <Body>
                                                    <Text>
                                                        {data.nama}
                                                    </Text>
                                                    <Text numberOfLines={1} note>
                                                        {data.peritem}
                                                    </Text>
                                                </Body>
                                                <Right>
                                                    <Text note>
                                                        {data.harga}
                                                    </Text>
                                                </Right>
                                            </ListItem>
                                        </View>
                                    }
                                />
                                
                            </ListItem>}
                    />
                    </View>
                </Content>
                <View >
                    <Button  full style={styles.mb15}
                    onPress={() => this.props.navigation.navigate('Halaman')} >
                        <Text>MAU BAYAR INI</Text>
                    </Button>
                </View>
            </Container>
        );
    }

}

export default keranjang;