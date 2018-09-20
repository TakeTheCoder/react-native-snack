import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { newPost } from './../actions/postActions';

class NewPostScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      post: {
        title: '',
        body: '',
      },
      error: ''
    }
  }

  handleChangeInput(text, field){
    let newState = {...this.state}
    newState.post[field] = text
    this.setState({newState})
  }

  handleNewPost(){
    this.props.newPost(this.state.post);
    this.setState({
      post: {
        title: "",
        body: ""
      }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Post Title" placeholderTextColor='#ffffff'  onChangeText={(text) => {this.handleChangeInput(text, 'title')} } />
        <TextInput style={styles.textInput} placeholder="Post Body" placeholderTextColor='#ffffff' onChangeText={(text) => {this.handleChangeInput(text, 'body')}} />

        <TouchableOpacity style={styles.button}  onPress={() => {this.handleNewPost()}}>
          <Text style={styles.buttonText} >Save</Text>
        </TouchableOpacity>
      
      
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { newPost })(NewPostScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 300,
    padding: 5,
    margin: 10,
    backgroundColor: 'silver',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    justifyContent: 'center',
    height: 40,
    width: 300,
    borderRadius: 25,
    padding: 5,
    margin: 10,
    backgroundColor: '#1c313a',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  }
  

});