import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    overflow: 'scroll',
  },

  float_button: {
    backgroundColor: 'rgb(221,52,79)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
  },

  taskContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    position: 'relative',
  },

  taskInfo: {
    height: '90%',
  },

  taskTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(233,233,233)',
    paddingBottom: 5,
  },

  taskDates: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
  },

  taskDate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    marginVertical: 10,
  },

  taskDateHeader: {
    fontWeight: 'bold',
  },

  taskStatus: {
    fontWeight: 'bold',
  },

  float_button_text: {
    color: '#fff',
    fontSize: 45,
    alignSelf: 'center',
    marginTop: -5,
  },

  btn_containers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  btn: {
    width: '33.333333%',
    padding: 5,
    backgroundColor: 'yellow',
    margin: 5,
    borderRadius: 5,
  },

  btn_text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  danger: {
    backgroundColor: 'red',
    color: '#fff',
  },

  success: {
    backgroundColor: 'rgb(53,221,12)',
    color: '#fff'
  },

  success_disabled: {
    backgroundColor: 'green',
    color: '#ccc'
  },
  
  form: {
    padding: 10
  },

  label: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5
  },

  input: {
    padding: 5,
    backgroundColor: '#FFF',
    marginBottom: 15,
    fontSize: 15,
    borderRadius: 5
  },

  details_container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    borderRadius: 5
  }

});

export default styles;
