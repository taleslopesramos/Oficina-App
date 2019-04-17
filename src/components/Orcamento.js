import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Orcamento = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.firstView}>
                <Text style={styles.normalText}>Vendedor:</Text>
                <Text style={styles.normalText}>Comprador:</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.normalText}>{props.data.seller}</Text>
                <Text style={styles.normalText}>{props.data.customer}</Text>
            </View>
            <View>
                <Text style={styles.valorText}>{props.data.value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        borderBottomWidth: 0.3,
        alignItems:'center',
    },
    firstView:{
        marginRight:10
    },
    secondView:{
        marginRight:'auto'
    },
    normalText: {
      fontSize: 16,
    },
    valorText: {
        fontWeight: 'bold',
        fontSize: 17,
          color: 'green',
    },
});

export default Orcamento;
