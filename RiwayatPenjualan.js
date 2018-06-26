import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon, Button, Container, Header, Content, Left } from 'native-base'

class RiwayatPenjualan extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={()=> this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text> Riwayat Penjualan </Text>
                </Content>

            </Container>
        );
    }
}
export default RiwayatPenjualan;