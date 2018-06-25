import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';




const GoldScreen = () => {
    return (
        <View style={styles.container}>
        <Text
            style={styles.welcome}
            onPress={() => Actions.gold()}
        >
        Gold
        </Text>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
});

export default GoldScreen;