import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
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
        renderItem={({item}) => <TouchableOpacity keyExtractor={item.id} onPress={(e) => { this.props.navigation.navigate('Post', {postId: item.id})}}><Text  style={styles.flatListStyleItem}>{item.id} - {item.title}: {item.body}</Text></TouchableOpacity>}
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
  }
})