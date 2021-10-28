import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image, TextInput } from "react-native";

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      numero: Math.floor(Math.random() * 10) + 1,
      numeroInput: 0
    };

    this.descobrir = this.descobrir.bind(this);
    this.setNumeroInput = this.setNumeroInput.bind(this);
  }

  setNumeroInput(value) {
    this.setState({ numeroInput: value});
  }

  descobrir() {
    if(isNaN(this.state.numeroInput))
      return alert('Por favor, use somente números.');
    
    if(this.state.numeroInput > 10 || this.state.numeroInput < 1)
      return alert('O valor deve estar entre 1 e 10.');

    if(Number.parseInt(this.state.numeroInput) === this.state.numero) {
      alert("Você acertou! O número era: " + this.state.numero);
      this.setState({numero: Math.floor(Math.random() * 10) + 1, numeroInput: 0 });
    }
    else {
      alert("Você errou, tente novamente.");
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.main_heading}>Adivinhe o número</Text>
        <Image style={{ resizeMode: 'stretch', width: 140, height: 140, alignSelf: 'center' }} source={require('./assets/interrogacao.jpg')} />
        <View>

        <TextInput value={this.state.numeroInput} style={styles.input} maxLength={2} multiline={false} placeholderTextColor="rgba(231,231,231, 0.45)" placeholder="0" keyboardType='numeric' onChangeText={(val) => {this.setNumeroInput(val)}} />
        
        </View>

        <View style={styles.buttonContainer}>
          <Button color="orange" onPress={this.descobrir} title="Descobrir"/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'black',
    flex: 1
  },

  main_heading: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20
  },

  input: {
    textAlign: 'center',
    fontSize: 70,
    width: 100,
    height: 100,
    borderColor: '#ccc',
    color: '#fff',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
  },

  buttonContainer: {
    padding: 10
  }
})

export default App;