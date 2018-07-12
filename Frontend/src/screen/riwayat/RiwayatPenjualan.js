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
    Grid,
    Row,
    Col,
} from 'native-base';
import styles from './styles'


const data = [
    {
        text: "02-07-242",
        note: "Rp 67.000",
        time: "2.42 pm"
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
                            dataArray={data}
                            renderRow={data =>
                                <ListItem  noBorder = {true}
                                onPress={() => this.props.navigation.navigate('riwayatpage2')}>
                                    
                                    <Grid>
                                        <Row style={{ backgroundColor: 'transparent' }}>
                                            <Col>
                                                <Text style={{ fontSize: 20,color : 'black' }}>{data.text}</Text>

                                            </Col>
                                            <Col style={{ backgroundColor: 'transparent'}}>
                                                {/* <Right style={{  fontSize: 14 , backgroundColor : 'green'}}> */}
                                                    <Text style= {{textAlign : 'right',color : 'black'}}>
                                                        {data.time}
                                                    </Text>
                                                {/* </Right> */}
                                            </Col>
                                        </Row>
                                        <Col><Text style={{ fontSize: 16,color : 'black' }}
                                            numberOfLines={1} note>{data.note}</Text>
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