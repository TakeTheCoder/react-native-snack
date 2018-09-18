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
  
  }

  render(){
    const post = this.props.navigation.getParam('post')
    return(
      <View style={styles.container}>
        <Text>This is a post with id:{post.id}</Text>
        <Text>{post.title}: {post.body}</Text>
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