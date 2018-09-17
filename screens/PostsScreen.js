import React from 'react';
import {
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
    fetch("https://jquery-test-api-auth.herokuapp.com/posts")
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
  }
  
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text>Here are your posts:</Text>
        <FlatList 
        
        data={this.state.posts}
        renderItem={({item}) => <Text style={styles.flatListStyleItem}>{item.id} - {item.title}: {item.body}</Text>}
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