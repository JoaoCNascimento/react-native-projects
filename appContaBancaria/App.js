import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Thumb,
  Slider,
  TextInput,
  Button,
  Switch
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const sexoOptions = ['Masculino', 'Feminino'];
const sexo = sexoOptions.map((value, key) => {
  return <Picker.Item key={key} value={value} label={value}></Picker.Item>
})

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      sexo: 'Masculino',
      idade: '',
      escolaridade: 'Nenhuma',
      limite: 50,
      brasileiro: false,
      mostrarDados: false
    }

    this.setNome = this.setNome.bind(this);
    this.setIdade = this.setIdade.bind(this);
    this.showData = this.showData.bind(this);
  }

  setNome(value) {  
    this.setState({nome: value})
  }


  setIdade(value) {
    this.setState({idade: value})
  }

  showData() {
    if (this.state.nome === '' || this.state.idade === '' || this.state.escolaridade === '') {
      return alert("Preencha todos os campos.")
    }

    this.setState({mostrarDados: true});
  }

  render() {
    return(
      <View>
        <ScrollView>
          <Text style={styles.main_heading}>Abertura de conta</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput onChangeText={(val) => this.setNome(val)} style={styles.textInput}></TextInput>
          
          <Text style={styles.label}>Idade</Text>
          <TextInput onChangeText={(val) => this.setIdade(val)} style={styles.textInput}></TextInput>

          <Text style={styles.label}>Sexo</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.sexo}
            onValueChange={(value, index) => this.setState({sexo: value })}> 
              <Picker.Item key={1} value={'Masculino'} label={'Masculino'}></Picker.Item>
              <Picker.Item key={2} value={'Feminino'} label={'Feminino'}></Picker.Item>
          </Picker>

          <Text style={styles.label}>Escolaridade</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.escolaridade}
            onValueChange={(value, index) => this.setState({escolaridade: value })}> 
              <Picker.Item key={1} value={'Nenhuma'} label={'Nenhuma'}></Picker.Item>
              <Picker.Item key={2} value={'Fundamental Incompleto'} label={'Fundamental Incompleto'}></Picker.Item>
              <Picker.Item key={3} value={'Fundamental Completo'} label={'Fundamental Completo'}></Picker.Item>
              <Picker.Item key={4} value={'Médio Incompleto'} label={'Médio Incompleto'}></Picker.Item>
              <Picker.Item key={5} value={'Médio Completo'} label={'Médio Completo'}></Picker.Item>
              <Picker.Item key={6} value={'Superior Incompleto'} label={'Superior Incompleto'}></Picker.Item>
              <Picker.Item key={7} value={'Superior Completo'} label={'Superior Completo'}></Picker.Item>
          </Picker>
          {/* ------------------------------------------------------------------------- */}
          <Text style={styles.label}>Limite</Text>
          <Slider
            style={{width: 330, alignSelf: 'center'}}
            step={50}
            minimumValue={50}
            maximumValue={500}
            value={this.state.limite}
            onValueChange={val => this.setState({ limite: val })}
            thumbTintColor='rgb(252, 128, 19)'
            maximumTrackTintColor='rgb(252, 150, 29)' 
            minimumTrackTintColor='rgb(202, 158, 19)'
          />
          <View style={styles.textCon}>
            <Text style={styles.colorGrey}>R$50</Text>
            <Text style={[styles.colorHighlighted, {  }]}>
              R${this.state.limite}
            </Text>
            <Text style={styles.colorGrey}>R$500</Text>
          </View>

          <View style={styles.switchContainer} >
            <Text style={styles.label}>Brasileiro</Text>
            <Switch value={this.state.brasileiro} onValueChange={(value) => this.setState({brasileiro: value})} />
          </View>

          <View style={styles.btnCon}>
            <Button onPress={this.showData} title="Abrir Conta"/>
          </View>

          {
            this.state.mostrarDados &&
            <View style={styles.data_container}>
              <Text style={styles.heading_two}>Dados Informados</Text>
              
              <Text style={styles.data_text}>
                <Text style={styles.data_text_label}>Nome:</Text> {this.state.nome}</Text>
              {/*  */}
              <Text style={styles.data_text}>
                <Text style={styles.data_text_label}>Idade:</Text> {this.state.idade}</Text>
              {/*  */}
              <Text style={styles.data_text}>
                <Text style={styles.data_text_label}>Escolaridade:</Text> {this.state.escolaridade}</Text>
              {/*  */}
              <Text style={styles.data_text}>
                <Text style={styles.data_text_label}>Sexo:</Text> {this.state.sexo}</Text>
              {/*  */}
              <Text style={styles.data_text}>
                <Text style={styles.data_text_label}>Nacionalidade:</Text> {this.state.brasileiro ? 'Brasileiro' : 'Estrangeiro' }</Text>
              {/*  */}
              <Text style={styles.data_text}>
                <Text style={styles.data_text_label}>Limite:</Text> {this.state.limite}</Text>
            </View>
          }

        </ScrollView> 
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },

  heading_two: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    color: 'rgb(120,210,255)'
  },

  data_container: {
    padding: 5
  },

  data_text: {
    color: '#1c1c1c',
    marginBottom: 10
  },

  data_text_label: {
    fontWeight: 'bold'
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 5
  },

  picker: {
    padding: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,
    marginTop: 5
  },

  textCon: {
      width: 320,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center'
  },

  colorGrey: {
      color: '#1c1c1c'
  },

  colorHighlighted: {
      color: '#2c2c2c',
      fontWeight: 'bold'
  },

  btnCon: {
    padding: 5,
    marginVertical: 10
  },

  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default App;
