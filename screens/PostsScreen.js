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
        console.warn(resp)
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
    return(
      <ScrollView style={styles.container}>
        <Text>Here are your posts:</Text>
        <FlatList 
        
        data={this.state.posts}
        renderItem={({item}) => <TouchableOpacity onPress={(e) => { this.props.navigation.navigate('Post', {post: item})}}><Text key={item.id} style={styles.flatListStyleItem}>{item.id} - {item.title}: {item.body}</Text></TouchableOpacity>}
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