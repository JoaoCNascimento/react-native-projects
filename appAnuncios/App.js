import React, {Component} from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet, Image } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id:1, categoria: 'Suíte Master', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imagem: '', contato: 'marinho@email.com' },
                { id:2, categoria: 'Suíte VIP', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imagem: '', contato: 'reginaldo@email.com' },
                { id:3, categoria: 'Suíte de Temporada', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imagem: '', contato: 'edinaldo@email.com' },
                { id:4, categoria: 'Suíte Econômica', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imagem: '', contato: 'marta@email.com' },
                { id:5, categoria: 'Suíte de Luxo', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imagem: '', contato: 'empregos@email.com' },
                { id:6, categoria: 'Suíte de Inverno', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', imagem: '', contato: 'vagas_ti@email.com' },
            ]
        }
    }

    render() {
        return(
            <View>
                <Text style={styles.main_header}>Reservas</Text>
                <View>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.feed} 
                        keyExtractor={ (item )=> item.id }
                        renderItem={({item}) => <Anuncio data={item}></Anuncio>}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }

}

class Anuncio extends Component {
    render(){
        return(
          <View style={styles.card}>
                <Image style={styles.img_container} source={{uri: 'https://www.pousadadoschas.com.br/blog/wp-content/uploads/2020/12/142.jpeg'}}></Image>
                <View style={styles.card_header}>
                    <Text style={styles.card_header_text}>{this.props.data.categoria}</Text>
                </View>
                <View style={styles.card_body}>
                    <Text>{this.props.data.descricao}</Text>
                </View>
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

    img_container: {
        width: '100%',
        height: 125
    },

    card: {
        marginHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
    },

    card_header: {
        paddingVertical: 10,
        backgroundColor: '#2c2c2c'
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
})

export default App;