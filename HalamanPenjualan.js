import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

import Penjualan from './Penjualan'

const HalamanPenjualan = () => {
    return (
        <View style={styles.container}>
        <Text
            style={styles.welcome}
            onPress={() => Actions.Penjualan()}
        >
        Biru
        </Text>
        </View>
    );
    
};
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
});

// export default HalamanPenjualan;