import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, AsyncStorage } from 'react-native';

export default class NewPostScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }


  handleChangeInputTitle = title => {
    this.setState({title})
  } 

   handleChangeInputBody = body => {
    this.setState({body})
  } 
  
  handleNewPost() {
    AsyncStorage.getItem('token').then(token => {
      fetch('https://jquery-test-api-auth.herokuapp.com/posts', 
        { method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json; charset=utf-8', 
            'Authentication': `Bearer ${token}`
          },
          body: JSON.stringify({post:{
            title: this.state.title,
            body: this.state.body
          }})
      }).then(resp => {
       return resp.json()
      }).then(resp => {
          this.props.navigation.navigate('Posts', {newPost: resp})
        }).catch(error => {
          console.log(error)
      })
    })  
  }  


render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from NewPost</Text>
      <TextInput style={[styles.contentInput, styles.contentContainer]} onChangeText={this.handleChangeInputTitle} value={this.state.title}  placeholder="Post-title" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} onChangeText={this.handleChangeInputBody}
      value={this.state.body} placeholder="Post-body" />
      <Button title="Save Post" onPress={() => this.handleNewPost()}/>
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
  }
})
