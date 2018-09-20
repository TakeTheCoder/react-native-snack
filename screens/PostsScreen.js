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
import { connect } from 'react-redux';
import { allPosts, deletePost } from './../actions/postActions';

class PostsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    this.props.allPosts();
  }


  render(){
    // let newState = [ ...this.props.posts ];
    console.log(this.props.posts)
    // const newPost = this.props.navigation.getParam('newPost');
    // if (newPost !== undefined){
    //   newState.push(newPost);
  
    // }
    return(
      <ScrollView style={styles.container}>
        <Text>You want to add another post? Click here:</Text>
        <Button onPress={() => {this.props.navigation.navigate('NewPost')}} title="Add a New Post"/>
        <Text>Here are your posts:</Text>
        <FlatList 
        
        data={this.props.posts}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => 
        <View style={styles.inline}>
          <TouchableOpacity onPress={(e) => { this.props.navigation.navigate('Post', {postId: item.id})}}><Text  style={styles.flatListStyleItem}>{item.id} - {item.title}: {item.body}</Text></TouchableOpacity>
          <TouchableOpacity onPress={(e) => {this.props.deletePost(item.id)}} ><Text>X</Text></TouchableOpacity>
        </View>} 
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.items
  }
}

export default connect(mapStateToProps, { allPosts, deletePost })(PostsScreen);


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