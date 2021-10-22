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
  View,
  Linking,
  Pressable,
} from 'react-native';

import {

} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={[ styles.mainContainer ]}>
        <Image source={{uri: "https://avatars.githubusercontent.com/u/76121783?v=4"}}
          style={[ styles.imgContainer, { width: 220, height: 220, borderRadius: 110,}]}
        />
        
        {/* LinkTree */}
        <View style={[ styles.linkTree ]}>
          <Text style={[ styles.link ]} onPress={() => {
            Linking.openURL("https://github.com/JoaoCNascimento");
          }}>GITHUB</Text>

        <Text style={[ styles.link ]} onPress={() => {
            Linking.openURL("https://www.linkedin.com/in/joao-nascimento0576/");
          }}>Linked in</Text>
        </View>

        {/* Sobre */}
        <View style={[ styles.textContainer ]}>
          <Text style={[ styles.heading ]}>Sobre</Text>
          <Text style={[ styles.paragraph ]}>
            Estudante de programação desde 2020. Familiarizado com as linguagens HTML, CSS, JavaScript, C#, SQL e com muita vontade de aprender mais.
          </Text>
        </View>

        {/* Conhecimentos */}
        <View style={[ styles.textContainer, { alignItems:"flex-start"} ]}>
          <Text style={[ styles.heading, { alignSelf: "center" } ]}>Conhecimentos</Text>

          {/* Parágrafo */}
          <Text style={[ styles.paragraph ]}> 
            <Text style={ styles.textSpan }>Linguagens: </Text> 
            HTML, CSS, JavaScript, C#, Java e Dart.
          </Text>
          {/* Parágrafo */}
          <Text style={[ styles.paragraph ]}> 
            <Text style={ styles.textSpan }>Frameworks: </Text> 
            Angular, React e Flutter.
          </Text>
          {/* Parágrafo */}
          <Text style={[ styles.paragraph ]}> 
            <Text style={ styles.textSpan }>Bancos de dados: </Text> 
            SQL Server, MongoDB, Postgres e MySQL.
          </Text>
          {/* Parágrafo */}
          <Text style={[ styles.paragraph ]}> 
            <Text style={ styles.textSpan }>Outros: </Text> 
            Node Js, npm, desenvolvimento em ambiente Linux.
          </Text>
          {/* Parágrafo */}
          <Text style={[ styles.paragraph ]}> 
            <Text style={ styles.textSpan }>Idioma(s): </Text> 
            Inglês (intermediário).
          </Text>
        </View> 
          {/*  */}
        <View style={[ styles.textContainer, { alignItems:"flex-start"} ]}>
          <Text style={styles.heading}>Projetos</Text>
          
          <Pressable onPress={() => {Linking.openURL("https://mynotepad-production.herokuapp.com/")}}>
              <Text style={styles.paragraph}>
                Mynotepad (Toque aqui para visualizar)
              </Text>
          </Pressable>
          {/* Parágrafo */}
          <Text style={[styles.paragraph]}>
            Unip Resort - Gestão
          </Text>
          {/* Parágrafo */}
          <Text>
            Unip Resort - Frontend
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: "#FFF",
    height: "100%",
  },

  imgContainer: {
    borderColor: "#2A628F",
    borderWidth: 5,
    alignSelf: "center",
    marginTop: 15
  },

  linkTree: {

    marginVertical: 15,
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    height: 100,

    justifyContent: "space-between"
  },

  link: {
    color: "#FFF",
    textTransform: "uppercase",
    backgroundColor: "#2A628F",
    fontWeight: "900",
    width: "70%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    height: 40
  },

  heading: {
    fontSize: 20,
    textTransform: "uppercase",
    //textDecorationLine: "underline",
    textAlign: "center",
    fontWeight: "bold",
    color: "#2A628F",
    marginBottom: 5
  },

  paragraph: {
    textAlign: "justify",
    marginBottom: 5
  },

  textContainer: {
    padding: 15,
    alignItems: "center"
  },

  textSpan: {
    fontWeight: "bold"
  }

});

export default App;
