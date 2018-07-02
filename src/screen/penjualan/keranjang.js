import React, {Component } from "react";
import {
    Text,
    
} from "react-native";
import Searchbar from './Searchbar'
import { Button, 
    Col, 
    Container, 
    Content, 
    Body,
    Header,  
    Left, 
    Right, 
    Title } from 'native-base'
import styles from './styles'
import { Icon } from 'react-native-elements';
class keranjang extends Component {
    onPresDetail 
    static navigationOptions = {
        drawerLabel: ()=> null
    }
    constructor(){
        super()
    }
    getName(){
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Icon name="arrow-back" onPress={
                        () => this.props.navigation.goBack()} />
                    </Left>
                    <Body>
                        <Title> Keranjang Belanjaan </Title>
                        <Right/>
                    </Body> 
                </Header>

                <Content style={styles.contentpenjualan}>
                 <Button onPress ={ ()=>this.props.navigation.navigate('Halaman')} >
                 <Text>MAU BAYAR INI</Text> 
                 </Button>
                    <Text >ini HALAMAN KERANJANG YA </Text>
                </Content>

            </Container>
        );
    }

}

export default keranjang;