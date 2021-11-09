import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';

import styles from './styles';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import axios from 'axios';
import Moment from 'moment';
import {TextInput} from 'react-native-gesture-handler';

const service = axios.create({
  baseURL: 'https://backendsixdevs.herokuapp.com/',
});

function taskList(props) {
  Moment.locale('pt-br');

  var [tasks, setTasks] = useState(null);
  var [requestDone, setRequestDone] = useState(false);

  if (!requestDone) {
    service.get().then(res => {
      // console.log(res.data);
      setTasks(res.data);
      setRequestDone(true);
    });
  }

  return (
    <View style={styles.container}>
      {/* <Button title="Nova Tarefa" color="rgb(50,212,12)"/> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {tasks &&
          tasks.map(e => {
            return (
              <Pressable
                onPress={() =>
                  props.navigation.navigate('Detalhes da tarefa', {task: e})
                }
                style={styles.taskContainer}
                key={e.id}>
                <ScrollView style={styles.taskInfo}>
                  <Text style={styles.taskTitle}>{e.title}</Text>
                  <Text style={styles.taskStatus}>
                    Status:{' '}
                    <Text style={{fontWeight: '400'}}>
                      {e.finished ? 'Finalizada' : 'Pendente'}
                    </Text>
                  </Text>
                  <View style={styles.taskDates}>
                    <View style={styles.taskDate}>
                      <Text style={styles.taskDateHeader}>Criada em: </Text>
                      <Text>{Moment(e.create_at).format('D/MM/yyyy')}</Text>
                    </View>
                    {/*  */}
                    <View style={styles.taskDate}>
                      <Text style={styles.taskDateHeader}>Atualizada em:</Text>
                      <Text>{Moment(e.updated_at).format('D/MM/yyyy')}</Text>
                    </View>
                  </View>
                </ScrollView>
                {/*  */}
                <View style={styles.btn_containers}>
                  <Pressable
                    onPress={() => {
                      props.navigation.navigate('Editar tarefa', {
                        id: e.id,
                      }),
                        setRequestDone(false);
                    }}
                    style={styles.btn}>
                    <Text style={styles.btn_text}>Editar</Text>
                  </Pressable>
                  {/*  */}
                  <Pressable
                  disabled={e.finished ? true : false}
                    onPress={() => {
                      service
                        .patch('/' + e.id)
                        .then(() => {
                          setRequestDone(false);
                          alert('Status alterado com sucesso!');
                        })
                        .catch(er => alert('Erro ao alterar status :('));
                    }}
                    style={[styles.btn, e.finished ? styles.success_disabled : styles.success ]}>
                    <Text style={[styles.btn_text, e.finished ? styles.success_disabled : styles.success ]}>
                      Mudar Status
                    </Text>
                  </Pressable>
                  {/*  */}
                  <Pressable
                    onPress={() => {
                      service
                        .delete('/' + e.id)
                        .then(() => {
                          setRequestDone(false);
                          alert('Tarefa excluída com sucesso!');
                        })
                        .catch(er => alert('Falha ao excluir task'));
                    }}
                    style={[styles.btn, styles.danger]}>
                    <Text style={[styles.btn_text, styles.danger]}>
                      Excluir
                    </Text>
                  </Pressable>
                </View>
              </Pressable>
            );
          })}
      </ScrollView>

      <Pressable
        onPress={() => {
          props.navigation.navigate('Nova tarefa');
        }}
        style={styles.float_button}>
        <Text style={styles.float_button_text}>+</Text>
      </Pressable>
    </View>
  );
}

class newTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    if (this.state.title === '' || this.state.description === '')
      return alert('Preencha os dois campos.');

    service
      .post('', {
        title: this.state.title,
        description: this.state.description,
      })
      .then(() => {
        this.props.navigation.navigate('Lista de tarefas');
      })
      .catch(er => {
        alert('Houve um erro ao criar a task :(');
      });
  }

  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          onChangeText={value => this.setState({title: value})}
          style={styles.input}
        />
        {/*  */}
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          onChangeText={value => this.setState({description: value})}
          style={styles.input}
        />

        <Button
          onPress={this.submit}
          title="Criar nova tarefa"
          color="rgb(25,205,12)"></Button>
      </View>
    );
  }
}

class editTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    if (this.state.title === '' || this.state.description === '')
      return alert('Preencha os dois campos.');

    service
      .put('/' + this.props.route.params.id, {
        title: this.state.title,
        description: this.state.description,
      })
      .then(() => {
        this.props.navigation.navigate('Lista de tarefas');
      })
      .catch(er => {
        alert('Houve um erro ao editar a task :(');
      });
  }

  async setFields() {
    let task;
    await service
      .get('/' + this.props.route.params.id)
      .then(res => (task = res.data))
      .catch(er => {
        alert('Erro ao carregar tarefa');
        this.props.navigation.navigate('Lista de tarefas');
      });

    this.setState({
      title: task.title,
      description: task.description,
    });
  }

  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          value={this.state.title}
          onChangeText={value => this.setState({title: value})}
          style={styles.input}
        />
        {/*  */}
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          value={this.state.description}
          onChangeText={value => this.setState({description: value})}
          style={styles.input}
        />

        <Button
          onPress={this.submit}
          title="Salvar alterações"
          color="rgb(25,205,12)"></Button>
      </View>
    );
  }

  componentDidMount() {
    this.setFields();
  }
}

function detailsTask(props) {
  var task = props.route.params.task;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.details_container}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={(styles.label, {fontSize: 15, marginVertical: 10})}>
          {task.description}
        </Text>
        <Text style={styles.taskStatus}>
          Status: <Text>{task.status ? 'Finalizada' : 'Pendente'}</Text>
        </Text>
        <View style={styles.taskDates}>
          <View style={styles.taskDate}>
            <Text style={styles.taskDateHeader}>Criada em: </Text>
            <Text>{Moment(task.create_at).format('D/MM/yyyy')}</Text>
          </View>
          {/*  */}
          <View style={styles.taskDate}>
            <Text style={styles.taskDateHeader}>Atualizada em:</Text>
            <Text>{Moment(task.updated_at).format('D/MM/yyyy')}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de tarefas" component={taskList} />
        <Stack.Screen name="Nova tarefa" component={newTask} />
        <Stack.Screen name="Editar tarefa" component={editTask} />
        <Stack.Screen name="Detalhes da tarefa" component={detailsTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
