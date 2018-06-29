import React, {Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import Searchbar from './Searchbar'
import { Button, 
        Col, 
        Container, 
        Content, 
        Thumbnail, 
        Body,
        Header,  
        Left, 
        Right, 
        Row, 
        Form,  
        Item, 
        Title, 
        } from 'native-base'
import styles from './styles'
import beras from './src/image/beras.jpg'

import { Icon } from 'react-native-elements';
class produkpage2 extends Component {
    // onPresDetail 
    static navigationOptions = {
        drawerLabel: ()=> null
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
                        () => this.props.navigation.navigate('Produk')} />
                    </Left>
                    <Body>
                        <Title> detail produk </Title>
                        <Right/>
                    </Body>
                    
                </Header>

                <Content> 
                    <View  style={styles.contentpicture}>         
                        <Image source={beras} style={styles.imageproduk} />
                    </View>
                    <View>
                        <Text style={styles.textmenu}> Detail Produk: </Text>
                        <Text style={styles.text}>Nama Produk : Beras Pulen</Text>
                        <Text style={styles.text}>Harga Jual : Rp 78.000,-</Text>
                        <Text style={styles.text}>Satuan </Text>
                        <Text style={styles.text}>Harga beli : Rp 68.000,-</Text>
                        <Text style={styles.text}>Tanggal datang produk : 29 Juni 2019</Text>
                        <Text style={styles.text}>Banyak produk yang datang : 44</Text>
                    </View>
                    
                </Content>

            </Container>
        );
    }
}

export default produkpage2;