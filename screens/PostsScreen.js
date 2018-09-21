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

  handlePostPress(post){
    //if (post.user_id === this.props.user.id){ preusmeri na post}
    // 
  }


  render(){



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
          <TouchableOpacity onPress={(e) => {this.handlePostPress(item)}}><Text  style={styles.flatListStyleItem}>{item.id} - created by user {item.user_id} - {item.title}: {item.body}</Text></TouchableOpacity>
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