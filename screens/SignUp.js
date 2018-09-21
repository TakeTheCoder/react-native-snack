import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, AsyncStorage } from 'react-native';


export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      first_name: '',
      last_name: '',
    }
  }

 

  handleEmailChange = email => {
    this.setState({email})
  } 

  handlePasswordChange = password => {
    this.setState({password})
  }

  handlePasswordConfirmationChange = password_confirmation => {
    this.setState({password_confirmation})
  }

  handleFirstNameChange = first_name => {
    this.setState({first_name})
  }

  handleLastNameChange = last_name => {
    this.setState({last_name})
  }



  handleSignUp() {
    fetch('https://jquery-test-api-auth.herokuapp.com/auth/register', 
      { method: 'POST',
        mode: 'cors',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({user:{
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
      }}),
      }
    ).then(resp => {
      return resp.json()
    }).then(resp => {
      this.props.navigation.navigate('LogIn')
    }).catch(error => {
      console.log(error)
    })
  }    
   

render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from SignUp</Text>
      <Text>{this.state.error}</Text>  
      <TextInput style={[styles.contentInput, styles.contentContainer]} keyboardType='email-address' onChangeText={this.handleEmailChange} value={this.state.email}  placeholder="E-mail" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} secureTextEntry={true} onChangeText={this.handlePasswordChange}
      value={this.state.password} placeholder="Password" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} secureTextEntry={true} onChangeText={this.handlePasswordConfirmationChange}
      value={this.state.password_confirmation} placeholder="Password-confirmation" />
      <TextInput style={[styles.contentInput, styles.contentContainer]}  onChangeText={this.handleFirstNameChange}
      value={this.state.first_name} placeholder="First-name" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} onChangeText={this.handleLastNameChange}
      value={this.state.last_name} placeholder="Last-name" />
      <Button title="Sign Up" onPress={() => this.handleSignUp()}/>
      <Button title="LogIn" onPress={() => this.props.navigation.navigate('LogIn')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer1: {
  paddingTop: 70, 
  },

  contentInput: {
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },

  contentContainer: {
    padding: 15,
    fontSize: 20,
  },

})