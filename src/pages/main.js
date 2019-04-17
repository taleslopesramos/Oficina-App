import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title:"Oficina App"
    }
    
    render() {
        return (
            <View>
                <Text>Página Principal</Text>
            </View>
        )
    }
}
