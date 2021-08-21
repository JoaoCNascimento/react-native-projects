/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable
} from 'react-native';


const App = () => {

  /*
    
    O SafeAreaView tem a mesma função da View

    O ScrollView é um subcontainer que dá a possibilidade de scroll
    na tela caso as tags ultrapassem o tamanho limite. Serve para evitar bugs
    relacionados a scroll e etc.

    A image é a logo

    Os texts estilizados com main_heading são os textos maiores

    Os TextInputs são os campos para inserção de texto

    O pressable é uma forma alternativa de criar um botão com
    estilização customizada.
  
  */

  return (
    <SafeAreaView style={ styles.backgroundStyle }>
      <ScrollView >
        <Image style={ styles.logo } source={require('./assets/img/unip-resort-logo.png')}/>
        
        <Text style={[ styles.main_heading, { fontWeight: "300"}] }>Faça seu login para acessar o aplicativo</Text>
        
        <Text style={ styles.label }>Email</Text>
        
        <TextInput style={ styles.input } placeholder="Digite seu email"></TextInput>
        
        <Text style={ styles.label }>Senha</Text>
        
        <TextInput style={ styles.input } placeholder="Digite sua senha"></TextInput>
        
        <Pressable style={ styles.button }>
          <Text style={ styles.btn_label }>Entrar</Text>
        </Pressable>
        
        <Text style={[ styles.main_heading, { fontWeight: "300" }]}>Ainda não tem uma conta? 
            <Text style={{fontWeight: "bold"}}>Cadastre-se!</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  // estilo do container SafeAreaView
  backgroundStyle: {
    backgroundColor: "rgb(51,51,51)",
    height: "100%",
    alignContent: "center"
  },

  // estilo da logo
  logo: {
    width: 200,
    height: 100,
    marginTop: 15,
    alignSelf: "center",
    justifyContent: "center"
  },

  // estilo dos headings
  main_heading: {
    fontSize: 25,
    color: "#FFF",
    alignSelf: "center",
    textAlign: "center",
    padding: 15,
    marginVertical: 15
  },

  // estilo das labels
  label: {
    fontSize: 20,
    fontWeight: "300",
    color: "#FFF",
    marginLeft: 20
  },

  // estilo dos text inputs
  input: {  
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 25,
    backgroundColor: "#FFF",
    borderRadius: 5,
    includeFontPadding: true,
    paddingLeft: 5,
    fontSize: 15
  },

  // estilo do text do botao
  btn_label: {
      fontSize: 20,
      fontWeight: "600",
      color: "#FFF",
  },

  //estilo do botao
  button: {
    backgroundColor: "#1788eb",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5
  }
});

export default App;
