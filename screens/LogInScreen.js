import React from 'react';
import { AsyncStorage } from "react-native";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class LogInScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChangeEmail(text){
    this.setState({email: text})
  }
  handleChangePassword(text){
    this.setState({password: text})
  }

  handleLogIn(){
    let data = JSON.stringify({
      user: {
        email: this.state.email,
        password: this.state.password
      }
    })
    
    fetch('https://jquery-test-api-auth.herokuapp.com/auth/login',{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: data,
    }).then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
      AsyncStorage.setItem('token', resp.token);
      const isAuthenticated = this.props.navigation.getParam('isAuthenticated', true );
      console.warn(isAuthenticated);
      this.props.navigation.navigate('Posts', {isAuthenticated: isAuthenticated})
      
    })
    .catch((error) => console.log(error))
  }

  render(){
    return (
      <View style={styles.container} >
        <Text> Log in here </Text>

        <TextInput style={styles.textInput} placeholder="E-mail" placeholderTextColor='#ffffff' keyboardType='email-address' autoCapitalize="none" textContentType='emailAddress' onChangeText={(text) => {this.handleChangeEmail(text)} } />
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#ffffff' secureTextEntry={true} onChangeText={(text) => {this.handleChangePassword(text)}} />

        <TouchableOpacity style={styles.button} onPress={() => {this.handleLogIn()}}>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
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
