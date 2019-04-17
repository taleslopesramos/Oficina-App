import React from 'react'
import { View, Text } from 'react-native'


const Orcamento = (props) => {
    return(
        <View>
            <View>
                <Text>{props.data.seller}</Text>
                <Text>{props.data.customer}</Text>
            </View>
            <View>
                <Text>{props.data.value}</Text>
            </View>
        </View>
    );
}

export default Orcamento;
