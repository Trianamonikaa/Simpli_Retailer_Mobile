import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';




const GrayScreen = () => {
    return (
        <View style={styles.container}>
        <Text
            style={styles.welcome}
            onPress={() => Actions.scarlet()}
        >
        Merah
        </Text>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'red',
    },
});

export default GrayScreen;