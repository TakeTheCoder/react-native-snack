import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  View,
} from 'react-native';

export default class PostsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    AsyncStorage.getItem('userToken').then((token) => {
      fetch("https://jquery-test-api-auth.herokuapp.com/posts", {
        headers: {
          "Authentication": `Bearer ${ token }`
        }
      })
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        console.log(resp)
        this.setState({
          posts: resp
        })
      })
      .catch(error => {
        console.log(error);
      })
    })
    
  }

  handleDeletePost(postId){
    AsyncStorage.getItem('userToken').then((token) => {
      fetch(`https://jquery-test-api-auth.herokuapp.com/posts/${postId}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authentication": `Bearer ${ token }`
        }
      }).then((resp) => {
        if (resp.ok) {
          let newPostsArray = this.state.posts.filter((post) => {
            return post.id !== postId
          })
          this.setState({posts: newPostsArray})
        }
      })
      .catch((error) => {
        console.log(error)
      })
    })
    
  }
  
  render(){
    let newState = [ ...this.state.posts ]
    const newPost = this.props.navigation.getParam('newPost');
    if (newPost !== undefined){
      newState.push(newPost);
  
    }
    return(
      <ScrollView style={styles.container}>
        <Text>You want to add another post? Click here:</Text>
        <Button onPress={() => {this.props.navigation.navigate('NewPost')}} title="Add a New Post"/>
        <Text>Here are your posts:</Text>
        <FlatList 
        
        data={newState}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => 
        <View style={styles.inline}>
          <TouchableOpacity onPress={(e) => { this.props.navigation.navigate('Post', {postId: item.id})}}><Text  style={styles.flatListStyleItem}>{item.id} - {item.title}: {item.body}</Text></TouchableOpacity>
          <TouchableOpacity onPress={(e) => {this.handleDeletePost(item.id)}} ><Text>X</Text></TouchableOpacity>
        </View>} 
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListStyleItem: {
    fontSize: 25,
  },
  inline: {
    alignItems: 'flex-start',
    flexDirection:'row',
  }
})