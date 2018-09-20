import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, AsyncStorage, ScrollView } from 'react-native';

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: []
    }
  }


  componentDidMount() {
    const postId = this.props.navigation.getParam('postId');
    AsyncStorage.getItem('token').then(token => {
      fetch(`https://jquery-test-api-auth.herokuapp.com/posts/${postId}`, 
      { method: 'GET',
        mode: 'cors',
        headers: {'content-type':'application/json',
        'Authentication': `Bearer ${token}`
        }
      }).then(resp => {
        resp.json()
      })
      .then(resp => {
        console.log(resp)
        this.setState({post: resp})
      })
      .catch(error => {
        console.log(error)
      })
    })
  }
 


render() {
    return (
      <View>
      <ScrollView>
      <Text style={styles.contentContainer1}>Hello from Post</Text>
      <Text>Clicked post:{this.state.post.id} </Text>
      <Text>{this.state.post.title}, {this.state.post.body} </Text>
      </ScrollView>
      </View>
    );
  }

 }

 const styles = StyleSheet.create({
  contentContainer1: {
    paddingTop: 70, 
  }
})



  