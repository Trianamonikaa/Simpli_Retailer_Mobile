import React, { Component } from "react";
import {
    View,
    Text,

} from "react-native";

import {
    Button,
    Container,
    Header,
    Title,
    Content,
    ListItem,
    Icon,
    Left,
    Right,
    Body,
    List,
} from 'native-base';
import styles from './styles'


const data = [
    {
        text: "02-07-242",
        note: "Rp 67.000",
        time: "2.42"
    },
    {
        text: "02-07-112",
        note: "Rp 576.000 ",
        time: "1:12 pm"
    }
]

class RiwayatPenjualan extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name="bicycle" />
        )
    }
    render() {
        return (
            <Container>
                   <Header style = {styles.headerback}>
                    <Left>
                        <Icon size={30}
                         name="menu" onPress={
                            () => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Body style={{width : '50%'}}>
                        <Title style={{color : 'black'}}>Riwayat Penjualan </Title>
                    </Body>
                </Header>

                <Content >

                    <View>
                        <List
                            dataArray={data}
                            renderRow={data =>
                                <ListItem  onPress={() => this.props.navigation.navigate('riwayatpage2')}>
                                    <Body>
                                            <Text style = {{fontSize : 20}}>{data.text}</Text>
                                        <Text style = {{fontSize : 16}}
                                        numberOfLines={1} note>{data.note}</Text>
                                    </Body>
                                    <Right>
                                        <Text note style = {{fontSize : 18}}>
                                            {data.time}
                                        </Text>
                                    </Right>
                                </ListItem>}
                        />
                    </View>

                </Content>

            </Container>
        );
    }
}
export default RiwayatPenjualan;