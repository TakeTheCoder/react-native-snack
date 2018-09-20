import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, AsyncStorage } from 'react-native';

export default class NewPostScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      error: ''
    }
  }


  handleChangeInput = text => {
    this.setState({text})
  } 

  
  handleNewPost() {
    AsyncStorage.getItem('token').then(token => {
    fetch('https://jquery-test-api-auth.herokuapp.com/posts', 
      { method: 'POST',
        mode: 'cors',
        headers: {'content-type':'application/json', 'Authentication': `Bearer ${token}`},
        body: JSON.stringify({user:{
          email: this.state.title,
          password: this.state.body,
      }}),
      }
    ).then(resp => {
      return resp.json()
    }).then(resp => {
      console.log(resp)
         this.props.navigation.navigate('Posts')
      }).catch(error => {
      console.log(error)
    })
    }
  }
  

render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from NewPost</Text>
      <TextInput style={[styles.contentInput, styles.contentContainer]} onChangeText={this.handleInputChange} value={this.state.title}  placeholder="Post-title" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} onChangeText={this.handleInputChange}
      value={this.state.body} placeholder="Post-body" />
      <Button title="Save Post" onPress={() => this.handleNewPost()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer1: {
  paddingTop: 70, 
  }
})
