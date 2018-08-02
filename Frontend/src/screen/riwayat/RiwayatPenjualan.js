import React, { Component } from "react";
import {
    View,
    Text,
    AsyncStorage
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
    Grid,
    Row,
    Col,
} from 'native-base';
import styles from './styles'
class RiwayatPenjualan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListOrder: []
        }
        AsyncStorage.getItem('ListOrder', (err, result) => {
            this.state.ListOrder = result;
            this.setState({ ListOrder: this.state.ListOrder });
            console.log(this.state.ListOrder);
        });
    }
    static navigationOptions = {
        drawerIcon: (
            <Icon name="paper" />
        )
    }
    render() {
        return (
            <Container >
                <Header style={styles.headerback}>
                    <Left style={{ width: '10%' }}>
                        <Icon size={30}
                            name="menu" onPress={
                                () => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{ width: '80%' }}>
                        <Title style={{ color: 'black' }}>Riwayat Penjualan </Title>
                    </Body>
                    <Right style={{ width: '50%' }}>
                    </Right>
                </Header>
                <Content >
                    <View>
                        <List
                            dataArray={this.state.ListOrder}
                            renderRow={data =>
                                <ListItem noBorder={true}
                                    onPress={() => this.props.navigation.navigate('riwayatpage2', { Order: this.state.Order })}>
                                    <Grid>
                                        <Row style={{ backgroundColor: 'transparent' }}>
                                            <Col>
                                                <Text style={{ fontSize: 20, color: 'black' }}>ttt{data.Kembalian}</Text>
                                            </Col>
                                            <Col style={{ backgroundColor: 'transparent' }}>
                                                {/* <Right style={{  fontSize: 14 , backgroundColor : 'green'}}> */}
                                                <Text style={{ textAlign: 'right', color: 'black' }}>
                                                    uiuiu{data.OrderDate}

                                                </Text>
                                                {/* </Right> */}
                                            </Col>
                                        </Row>
                                        <Col><Text style={{ fontSize: 16, color: 'black' }}
                                            numberOfLines={1} note>lalala{data.TotalHarga}</Text>
                                        </Col>
                                        <Row>
                                        </Row>
                                    </Grid>
                                </ListItem>}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}
export default RiwayatPenjualan;