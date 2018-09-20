import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';

export default class SignUpScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '', 
      password: '',
      password_confirmation: '',
      first_name: '',
      last_name: '',
      errors: []
    }
  }
  handleInputChange(text, field){
    this.setState({[field]: text})
  }

  handleSignUp(){
    let data = JSON.stringify({
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      }
    });
    
    fetch('https://jquery-test-api-auth.herokuapp.com/auth/register',{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: data,
    }).then((resp) => resp.json())
    .then((resp) => {
      console.warn(resp);
      if (resp.errors){
        this.setState({ errors: resp.errors})
      } else{
          AsyncStorage.setItem('userToken', resp.token).then((token) => {
            this.props.navigation.navigate('LogIn', {newUserLogIn: true})  
          })
      }  
    })
    .catch((error) => {
      console.warn(error)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text> {this.state.errors} </Text>
        <Text> Fill this form to sign up: </Text>
        <TextInput style={styles.textInput} placeholder="E-mail" placeholderTextColor='#ffffff' keyboardType='email-address' textContentType='emailAddress' onChangeText={(text) => {this.handleInputChange(text, 'email')}}/>
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#ffffff' secureTextEntry={true} onChangeText={(text) => {this.handleInputChange(text, 'password')}}/>
        <TextInput style={styles.textInput} placeholder="Password confirmation" placeholderTextColor='#ffffff' secureTextEntry={true} onChangeText={(text) => {this.handleInputChange(text, 'password_confirmation')}}/>

        <TextInput style={styles.textInput} placeholder="First Name" placeholderTextColor='#ffffff' onChangeText={(text) => {this.handleInputChange(text, 'first_name')}} />
        <TextInput style={styles.textInput} placeholder="Last Name" placeholderTextColor='#ffffff' onChangeText={(text) => {this.handleInputChange(text, 'last_name')}}/>


        <TouchableOpacity style={styles.button} onPress={() => {this.handleSignUp()}}>
          <Text style={styles.buttonText} >Sign up</Text>
        </TouchableOpacity>

        <View style={styles.messageContainer}>
        <Text>If you already have account, please, go to</Text>
          <Button
            title="Log In"
            onPress={() => this.props.navigation.navigate('LogIn')}
          />
        </View>
        
        
       
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
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