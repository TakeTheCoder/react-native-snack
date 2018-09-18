import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

export default class PostsScreen extends React.Component{
  constructor(props){
    super(props);
    this.getPost();
    this.state = {
      post: {}
    }

  
  }

  getPost(){
    const postId = this.props.navigation.getParam('postId');
    AsyncStorage.getItem('userToken').then((token) => {
      fetch(`https://jquery-test-api-auth.herokuapp.com/posts/${postId}`, {
        method: 'GET',
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authentication": `Bearer ${ token }`
        }
      }).then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        this.setState({post: resp})
      })
      .catch((error) => console.log(error))
    
    })
    
  }

  render(){
    
    return(
      <View style={styles.container}>
        <Text>This is a post with id:{this.state.post.id}</Text>
        <Text>{this.state.post.title}: {this.state.post.body}</Text>
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
  }
});