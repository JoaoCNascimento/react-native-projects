import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      precoAlcool: 0,
      precoGasolina: 0,
      resultado: ''
    }

    this.setPrecoAlcool = this.setPrecoAlcool.bind(this); 
    this.setPrecoGasolina = this.setPrecoGasolina.bind(this); 
    this.calcular = this.calcular.bind(this); 
  }

  setPrecoAlcool(precoAlcool) {
    this.setState({ precoAlcool, resultado: '' });
  }

  setPrecoGasolina(precoGasolina) {
    this.setState({ precoGasolina, resultado: '' });
  }

  calcular() {
    
    if (isNaN(Number.parseFloat(this.state.precoAlcool)) || isNaN(Number.parseFloat(this.state.precoGasolina)))
      alert("Por favor, use apenas números.");

    if ((Number.parseFloat(this.state.precoAlcool) / Number.parseFloat(this.state.precoGasolina)) < 0.7) {
      this.setState({ resultado: 'Alcool é o mais vantajoso.'});
    }
    else {
      this.setState({ resultado: 'Gasolina é o mais vantajoso.'});
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.main_heading}>Álcool ou gasolina</Text>

        <Image style={{ borderRadius: 20, resizeMode: 'stretch', width: 300, height: 180, alignSelf: 'center', marginTop: 20, marginBottom: 10}} source={require('./assets/gasolina-alcool-min.jpg')} />

        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado} >{ this.state.resultado }</Text>
        </View>

        <Text style={styles.label}>Preco Alcool</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value) => {this.setPrecoAlcool(value)}} />
        {/*  */}
        <Text style={styles.label}>Preco Gasolina</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value) => {this.setPrecoGasolina(value)}} />

        <View style={styles.buttonContainer}>
          <Button color="orange" onPress={this.calcular} title="Calcular"></Button>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(7,7,7)'
  },

  main_heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF'
  },

  resultado: {
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF'
  },

  resultadoContainer: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    margin: 5,
    backgroundColor: '#1c1c1c',
    color: '#FFF'
  },

  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF'
  },

  input: {
    backgroundColor: '#2c2c2c',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 15,
    margin: 5,
    color: '#FFF',
    paddingLeft: 15
  },

  buttonContainer: {
    marginTop: 10,
    padding: 5
  },

})

export default App;