import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';


export default class LogIn extends React.Component {
  static navigationOptions = {
     header: 'Neki tekst',
  };

  state={
    email: '',
    password: '',
  }


  handleEmailChange(text){
    this.setState({email:text})
  } 


  handlePasswordChange(text){
    this.setState({password:text})
  }


  handleLogIn(){
    fetch('https://jquery-test-api-auth.herokuapp.com/auth/login', 
      { method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.passwrod
      })
      }
    )
    .then(resp => {console.log(resp)})
    .catch(error => {console.log(error)})
    // this.props.navigation.navigate('Posts')
  }

render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from LogIn</Text>
      <Text>{this.state.email}</Text>
      <Text>{this.state.password}</Text>
      <TextInput style={[styles.contentInput, styles.contentContainer]} keyboardType='email-address' onChangeText={text => {this.handleEmailChange(text)}} placeholder="E-mail" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} secureTextEntry={true} onChangeText={text => {this.handlePasswordChange(text)}} placeholder="Password" />
      <Button title="Log in" onPress={() => this.handleLogIn()}/>
      <Button title="Home Screen" onPress={() => this.props.navigation.navigate('HomeScreen')} />
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