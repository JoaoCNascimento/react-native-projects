
import React, { Component } from 'react';
import { SafeAreaView, Pressable, View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      valorUm: 0,
      valorDois: 0,
      resultado: 0
    }

    this.atualizar = this.atualizar.bind(this);
    this.multiplicar = this.multiplicar.bind(this);
  }

  atualizar(value, input) {
    console.log(value, input)
    if(input === 1) {
      this.setState({ valorUm: value })
    }
    else {
      this.setState({ valorDois: value })
    }
  }

  multiplicar() {
    if(isNaN(this.state.valorUm) || isNaN(this.state.valorDois))
    {
      return alert("Por favor, escreva apenas números.")
    }
    this.setState({ resultado: this.state.valorUm * this.state.valorDois });
  } 

  render () {
    return(
      <View style={ styles.container }>
        <Text style={ styles.mainHeading }>Multiplicador</Text>
        <View style={ styles.qtdPessoas }>
          <Text style={ styles.buttonText }>{ this.state.resultado }</Text>
        </View>
        <View style={ styles.inputContainer }>
          <TextInput keyboardType="numeric" onChangeText={(value) => {this.atualizar(value, 1)}} placeholder="Digite o valor 1" style={ styles.input }/>
          {/*  */}
          <TextInput keyboardType="numeric" onChangeText={(value) => {this.atualizar(value, 2)}} placeholder="Digite o valor 2" style={ styles.input }/>
        </View>
        <Button onPress={this.multiplicar} title="Calcular">
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainHeading: {
    textTransform: 'capitalize',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c2c2c'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  qtdPessoas: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '40%',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 10
  },

  input: {
    borderColor: '#1c1c1c',
    borderWidth: 1,
    width: "100%",
    marginBottom: 10,
  },

  button: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    width: '48%',
    margin: 5
  },

  buttonText: {
    fontSize: 40,
    textAlign: 'center'
  }

})

export default App;
