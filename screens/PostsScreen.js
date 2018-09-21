import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';



export default class PostsScreen extends React.Component {
  
  state={
    posts: [],
  }


  componentWillMount() {
    fetch('https://jquery-test-api-auth.herokuapp.com/posts')
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      this.setState({posts: resp})
    })
    .catch(error => {
      console.log(error)
    })
  }

render() {
  let newPosts = [... this.state.posts]
  const newPost = this.props.navigation.getParam('newPost')
  if (newPost !== undefined) {
      newPosts.unshift(newPost);
    }
    return (
      <View>
        <ScrollView>
          <TouchableOpacity
          style={styles.button}
          onPress={() => {this.props.navigation.navigate('NewPost')}}
          >
          <Text style={styles.textPostStyle}> Dodaj Post </Text>
        </TouchableOpacity>
          <Text style={styles.contentContainer1}>Hello from Posts</Text>
          <FlatList
            data={newPosts}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => 
            <View style={styles.postStyle}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Post', {postId: item.id})}}> <Text style={styles.listStyle}> <Text>br:</Text> {item.id}, {item.title}, {item.body} </Text></TouchableOpacity>
             <TouchableOpacity onPress= {() => {this.props.detlePost(item.id)}}><Text> X</Text> </TouchableOpacity>
             </View>
             }
            />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer1: {
    paddingTop: 70, 
  },
  listStyle: {
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
  },
  textPostStyle: {
    fontSize: 20,
    color:'white',
    fontWeight: 'bold',
  },
  postStyle: {
    flexDirection:'row', 
    flexWrap:'wrap'
  }
})