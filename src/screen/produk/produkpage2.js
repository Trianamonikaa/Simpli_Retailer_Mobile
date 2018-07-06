import React, {Component } from "react";
import {
    View,
    Text,
   
    Image,
} from "react-native";
import Searchbar from './Searchbar'
import {  
        Container, 
        Content, 
        Body,
        Header,  
        Left, 
        Right, 
       Icon,
        Title, 
        } from 'native-base'
import styles from './styles'
import beras from '../../image/beras.jpg'

class produkpage2 extends Component {
    // onPresDetail 
    static navigationOptions = {  
        drawerIcon: (
            <Icon name = "ios-cart-outline"/>
        )
    }
    static navigationOptions = {
        drawerLabel: ()=> null
    }
    getName(){
        
        return Searchbar
    }
    render() {
        return (
            <Container>
                <Header style = {styles.headerback}>
                    <Left>
                        <Icon size={30}
                         name="arrow-back" onPress={
                            () => this.props.navigation.navigate('Produk')} />
                    </Left>
                    <Body style={{width : '50%'}}>
                        <Title style={{color : 'black'}}> Detail Produk </Title>
                    </Body>
                </Header> 

                <Content> 
                    <View  style={styles.contentpicture}>         
                        <Image source={beras} style={styles.imageproduk} />
                    </View>
                    <View>
                        <Text style={styles.textmenu}> Detail Produk: </Text>
                        <Text style={styles.text}>Nama Produk   : Beras Pulen</Text>
                        <Text style={styles.text}>Harga Jual         : Rp 78.000,-</Text>
                        <Text style={styles.text}>Satuan </Text>
                        <Text style={styles.text}>Harga beli          : Rp 68.000,-</Text>
                        <Text style={styles.text}>Produk datang : 29 Juni 2019</Text>
                        <Text style={styles.text}>Banyak Produk : 44</Text>
                        <Text style={styles.text}>Produk deudad : 29 Juni 2019</Text>
                        <Text style={styles.text}>Produk dududu : 29 Juni 2019</Text>
                        <Text style={styles.text}>Produk dadada : 29 Juni 2019</Text>
                        <Text style={styles.text}>Produk dududu : 29 Juni 2019</Text>
                        <Text style={styles.text}>Produk uuuuuu : 29 Juni 2019</Text>
                        <Text style={styles.text}>Produk pppppp : 29 Juni 2019</Text>
                        <Text style={styles.text}>Produk dedede : 29 Juni 2019</Text>

                    </View>
                    
                </Content>

            </Container>
        );
    }
}

export default produkpage2;