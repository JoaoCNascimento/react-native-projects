import React, { Component } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const classificao = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso."
  }
  else if(imc >= 18.5 && imc <= 24.9 ) {
    return "Peso adequado.";
  }
  else if(imc >= 25 && imc <= 29.9 ) {
    return "Sobrepeso.";
  }
  else if(imc >= 30 && imc <= 34.9 ) {
    return "Obesidade grau I...";
  }
  else if(imc >= 35 && imc <= 39.9 ) {
    return "Obesidade grau II...";
  }
  else {
    return "Obesidade grau III...";
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      peso: 0,
      classificao: ""
    }

    this.calcularImc = this.calcularImc.bind(this);
    this.setPeso = this.setPeso.bind(this);
    this.setAltura = this.setAltura.bind(this);
  }

  setPeso(peso) {
    this.setState({peso});
  }

  setAltura(altura) {
    this.setState({altura});
  }

  calcularImc() {
    this.setState({classificao: classificao(this.state.peso / ((this.state.altura / 100) ^ 2 ))});
  }

  render() {
    return(
      <View style={styles.main_container}>
        <Text style={styles.main_heading}>Cálculadora de IMC</Text> 

        <View style={styles.resultado}>
          <Text style={styles.label}>Resultado</Text>
          <Text>{ this.state.classificao }</Text>
        </View>

        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value)=>{this.setPeso(value)}} />
        {/*  */}
        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value)=>{this.setAltura(value)}} />
        
        <View style={styles.buttonContainer}>
          <Button onPress={this.calcularImc} title="Verificar"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },

  resultado: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(60, 225, 0, 0.25)',
    paddingTop: 5,
    paddingBottom: 25,
    width: '98%',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30
  },

  resultadoContainer: {},

  main_heading: {
    fontSize: 40,
    color: '#1c1c1c',
    marginBottom: 10
  },

  label: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },

  input: {
    width: '98%',
    borderWidth: 1,
    borderColor: '#1c1c1c',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },

  buttonContainer: {
    padding: 5
  }
})

export default App;