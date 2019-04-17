import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#FFF'
    }
});
