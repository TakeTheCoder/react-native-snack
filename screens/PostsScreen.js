import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  ListItem,
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
      <View style={styles.container}>
        <Text>Here are your posts:</Text>
        <FlatList 
        data={this.state.posts}
        renderItem={({item}) => <Text >{item.id} - {item.title} - {item.body}</Text>}
        />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})