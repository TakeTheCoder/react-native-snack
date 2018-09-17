import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, AsyncStorage } from 'react-native';


export default class LogIn extends React.Component {
  static navigationOptions = {
     header: 'Neki tekst',
  };

  state={
    email: '',
    password: '',
  }


  handleEmailChange = email => {
    this.setState({email})
  } 


  handlePasswordChange = password => {
    this.setState({password})
  }


  handleLogIn = async () => {
  const response = await fetch('https://jquery-test-api-auth.herokuapp.com/auth/login', 
      { method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
      }),
      }
    )
    console.log(response)
    if (response.ok) {
      this.props.navigation.navigate('Posts')
       return
    }
    const errMessage = await response.text()
    this.setState({err: errMessage}) 
  
  }
  
render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from LogIn</Text>
      <Text>{this.state.err}</Text>
      <Text>{this.state.email}</Text>
      <Text>{this.state.password}</Text>
      <TextInput style={[styles.contentInput, styles.contentContainer]} keyboardType='email-address' onChangeText={this.handleEmailChange} value={this.state.email}  placeholder="E-mail" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} secureTextEntry={true} onChangeText={this.handlePasswordChange}
      value={this.state.password} placeholder="Password" />
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