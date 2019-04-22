import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native'

const showAlert = (descricao) => {
    Alert.alert(
        'Descrição',
        descricao,
        [
        {text: 'Fechar'},
        ],
    );
}

const Orcamento = (props) => {
    const {description, seller, customer, value} = props.data;
    
    return(
        <TouchableNativeFeedback onPress={()=> showAlert(description)} underlayColor="#2196F3">
            <View style={styles.container} >
                <View style={styles.firstView}>
                    <Text style={styles.titleText}>Vendedor:</Text>
                    <Text style={styles.titleText}>Comprador:</Text>
                </View>
                <View style={styles.secondView}>
                    <Text style={styles.normalText}>{seller}</Text>
                    <Text style={styles.normalText}>{customer}</Text>
                </View>
                <View>
                    <Text style={styles.valorText}>{value}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
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
        marginRight:10,
    },
    secondView:{
        marginRight:'auto',
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
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
