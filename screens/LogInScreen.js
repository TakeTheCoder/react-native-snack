import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { login } from './../actions/userActions';

class LogInScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
      loginMistake: false,
    }
  }

  handleChangeInput(text, field){
    let newState = {...this.state};
    newState.user[field] = text;
    this.setState({newState});
  }

  render(){
    if (this.props.isLoading) {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      )
    }
    
    let massage = 'Log in here';
    (this.props.navigation.getParam('newUserLogIn')) ? massage = 'You successufuly signed up, now you can log in' : massage;
    (this.state.loginMistake) ? massage = 'Ups, seem like you made a mistake. Try again' : massage;
    return (
      <View style={styles.container} >
        <Text> {massage} </Text> :
        <TextInput style={styles.textInput} placeholder="E-mail" placeholderTextColor='#ffffff' keyboardType='email-address' autoCapitalize="none" textContentType='emailAddress' onChangeText={(text) => {this.handleChangeInput(text, 'email')} } />
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#ffffff' secureTextEntry={true} onChangeText={(text) => {this.handleChangeInput(text, 'password')}} />

        <TouchableOpacity style={styles.button} onPress={() => {this.props.login(this.state.user)}}>
          <Text style={styles.buttonText} >Log in</Text>
        </TouchableOpacity>

        <View style={styles.messageContainer}>
        <Text>If you don't have account, please, go to</Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
  
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.loginErrors,
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading
  }
}

export default connect(mapStateToProps, {
  login
})(LogInScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 130,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  textInput: {
    width: 300,
    padding: 5,
    margin: 10,
    backgroundColor: 'silver',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    justifyContent: 'center',
    height: 40,
    width: 300,
    borderRadius: 25,
    padding: 5,
    margin: 10,
    backgroundColor: '#1c313a',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  }
  

});
