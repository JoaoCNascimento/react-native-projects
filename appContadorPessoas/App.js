
import React, { Component } from 'react';
import { SafeAreaView, Pressable, View, Text, StyleSheet } from 'react-native';

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      qtdPessoas: 0
    }

    this.atualizar = this.atualizar.bind(this);
    this.incrementaPessoa = this.incrementaPessoa.bind(this);
  }

  atualizar() {
    this.setState({
      qtdPessoas: this.state.qtdPessoas
    })
  }

  incrementaPessoa(string) {
    if (string === '+')
      this.setState({ qtdPessoas: this.state.qtdPessoas + 1 })
    else {
      if (this.state.qtdPessoas > 0) {
        this.setState({ qtdPessoas: this.state.qtdPessoas - 1 })
      }
    }
  }

  render () {
    return(
      <View style={ styles.container }>
        <Text style={ styles.mainHeading }>Contador de pessoas</Text>
        <View style={ styles.qtdPessoas }>
          <View style={ styles.counterContainer }>
            <Text style={[ styles.buttonText, { fontSize: 60 }]}>{this.state.qtdPessoas}</Text>
          </View>
        </View>
        <View style={ styles.buttonContainer }>
          <Pressable style={[ styles.button, styles.success ]} onPress={(e) => {this.incrementaPessoa("+")}}>
            <Text style={[ styles.buttonText, styles.success ]}>+</Text>
          </Pressable>
          {/*  */}
          <Pressable style={[ styles.button, styles.danger ]} onPress={(e) => {this.incrementaPessoa("-")}}>
            <Text style={[ styles.buttonText, styles.danger ]}>-</Text>
          </Pressable>
        </View>
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

  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    width: '40%',
    height: '50%'
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

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  button: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    width: '48%',
    margin: 5
  },

  success: {
    borderColor: '#206b00',
    backgroundColor: '#b4ff6e',
    color: '#206b00'
  },

  danger: {
    borderColor: '#c20000',
    backgroundColor: '#ff7d66',
    color: '#c20000'
  },

  buttonText: {
    fontSize: 40,
    textAlign: 'center'
  }

})

export default App;
