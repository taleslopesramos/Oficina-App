import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Orcamento from '../components/Orcamento'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.buscaOrcamentos = this.buscaOrcamentos.bind(this);
    }

    // Set Header Title
    static navigationOptions = {
        title:"Oficina App"
    }

    state = {
        orcamentos:[],
        loading:true,
        error:false
    }

    componentDidMount(){
        this.buscaOrcamentos();
    }

    // Busca os Orçamentos da API
    async buscaOrcamentos(){
        // Tenta pegar os orçamentos da API
        try {
            // Busca o resultado da Chamada
            const orcamentosApiCall = await fetch('https://my-json-server.typicode.com/codificar/oficina/proposals');
            // Da parse no Json
            const orcamentos = await orcamentosApiCall.json();
            // Setta o estado
            this.setState({
                orcamentos,
                loading:false
            });
            
        } catch(err) {
            this.setState({ error:true });
        }
    }
    
    render() {
        const { orcamentos, loading, error } = this.state;
        
        if(error){
            return (
                <View>
                    <Text>Ocorreu um erro! não foi possível buscar os orçamentos.</Text>
                </View>
            )            
        }
        else if(!loading){
            return (
                <ScrollView>
                    {orcamentos.map((orcamento, i) => <Orcamento key={i} data={orcamento}/>)}
                </ScrollView>
            )
        }
        else{
            return(
                <View>

                </View>
            );
        }
    }
}
