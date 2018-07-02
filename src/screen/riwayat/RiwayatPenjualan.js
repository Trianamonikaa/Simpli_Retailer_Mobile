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
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() =>
                            this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Body>
                        <Title> Riwayat Penjualan </Title>
                        <Right />
                    </Body>
                </Header>

                <Content >

                    <View>
                        <List
                            dataArray={data}
                            renderRow={data =>
                                <ListItem avatar>
                                    <Body>
                                        <Button transparent onPress={() => this.props.navigation.navigate('riwayatpage2')}>
                                            <Text>{data.text}</Text>
                                        </Button>
                                        <Text numberOfLines={1} note>{data.note}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>
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