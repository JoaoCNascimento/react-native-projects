import React, {Component} from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, Button } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id:1, vaga: 'Desenvolvedor Backend Pleno', descricao: 'Vaga para desenvoledor backend pleno, com conhecimenos em git, github, node js, jwt, docker e arquitetura de microserviços.', salario: 6500.00, contato: 'marinho@email.com' },
                { id:2, vaga: 'Estagiário Desenvolvedor Angular', descricao: 'Vaga para estudantes cursando ensino superior em ADS, Ciência da computação e afins.', salario: 2000.00, contato: 'reginaldo@email.com' },
                { id:3, vaga: 'Desenvolvedor Fullstack Sênior', descricao: 'Procuramos desenvolvedor sênior fullstack, com experiência nas tecnologias React, .NET Core, Docker e arquitetura de microserviços.', salario: 12000.00, contato: 'edinaldo@email.com' },
                { id:4, vaga: 'DBA Pleno', descricao: 'Estamos em busca de um administrador de banco de dados.', salario: 5700.00, contato: 'marta@email.com' },
                { id:5, vaga: 'Desenvolvedor Frontend Júnior', descricao: 'Gosta de desafios? Então seu lugar é aqui! Procuramos um desenvolvedor frontend para nos auxiliar na criação de um framework frontend feito em C.', salario: 4500.00, contato: 'empregos@email.com' },
                { id:6, vaga: 'Desenvolvedor Flutter', descricao: 'Buscamos dev flutter com um ano de experiência em projetos.', salario: 4500.00, contato: 'vagas_ti@email.com' },
            ]
        }
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.main_header}>Vagas</Text>
                <ScrollView>
                    <FlatList 
                    data={this.state.feed} 
                    keyExtractor={ (item )=> item.id }
                    renderItem={({item}) => <Vaga data={item}></Vaga>}
                    >
                    </FlatList>
                </ScrollView>
            </ScrollView>
        );
    }

}

class Vaga extends Component {
    render(){
        return(
          <View style={styles.card}>
            <View style={styles.card_header}>
                <Text style={styles.card_header_text}>{this.props.data.vaga} </Text>
            </View>
            <View style={styles.card_body}>
                <Text style={styles.card_body_description}>{this.props.data.descricao} </Text>
                <Text>
                    <Text style={styles.card_label}>Contato: </Text>
                    {this.props.data.contato} 
                </Text>
                {/*  */}
                <Text>
                    <Text style={styles.card_label}>Salário: </Text> 
                    R${this.props.data.salario}
                </Text>
            </View>
            <Button color="green" title="Candidatar-se"/>
          </View>
        );
    }    
}

const styles = StyleSheet.create({
    main_header: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 15,
        textTransform: 'uppercase',
        color: 'black'
    },

    card: {
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        shadowRadius: 31,
        shadowColor: 'rgba(30,30,30,0.50)',
        shadowOffset: 2
    },

    card_header: {
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#1c1c1c'
    },

    card_header_text: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    card_body: {
        backgroundColor: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 5
    },

    card_label: {
        fontWeight: 'bold'
    },

    card_body_description: {
        textAlign: 'justify',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 5
    },

    container: {
        backgroundColor: 'rgba(240,240,240,0.89)'
    }
})

export default App;