import React from 'react';
import {
  AsyncStorage,
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
      title: '',
      body: '',
      error: ''
    }
  }

  handleChangeInput(text, field){
    this.setState({[field]: text})
  }

  handleNewPost(){
    let data = JSON.stringify({
      post: {
        title: this.state.title,
        body: this.state.body
      }
    })
    AsyncStorage.getItem('userToken').then((token) => {
      fetch("https://jquery-test-api-auth.herokuapp.com/posts", {
        method: "POST",
        mode: "cors",
        headers:{
          "Content-Type": "application/json; charset=utf-8",
          "Authentication": `Bearer ${ token }`
        },
        body: data
      }).then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        
        this.props.navigation.navigate('Posts', {newPost: resp})
        
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Post Title" placeholderTextColor='#ffffff'  onChangeText={(text) => {this.handleChangeInput(text, 'title')} } />
        <TextInput style={styles.textInput} placeholder="Post Body" placeholderTextColor='#ffffff' onChangeText={(text) => {this.handleChangeInput(text, 'body')}} />

        <TouchableOpacity style={styles.button}  onPress={() => {this.handleNewPost()}}>
          <Text style={styles.buttonText} >Save</Text>
        </TouchableOpacity>
      
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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