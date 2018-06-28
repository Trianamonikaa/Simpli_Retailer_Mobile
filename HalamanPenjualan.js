import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
// import styles from './styles';
import Penjualan from './Penjualan'


class HalamanPenjualan extends Component{
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <Button style = {styles.mb15}>
                    <Text> Info </Text>

                </Button>
                </Content>
            </Container>
        )
    }
}

// const HalamanPenjualan = () => {
//     return (
//         <View style={styles.container}>
//         <Text
//             style={styles.welcome}
//             onPress={() => Actions.Penjualan()}
//         >
//         Biru
//         </Text>
//         </View>
//     );
    
// };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'blue',
    },
     mb15: {
    marginBottom: 20
  },
  mt15: {
    marginTop: 15
  },
  mb20: {
    marginBottom: 20
  },
  iconButton: {
    color: "#007aff"
  },
  margin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF"
  },
});

// export default HalamanPenjualan;