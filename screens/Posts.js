import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';



export default class LogIn extends React.Component {
  static navigationOptions = {
     header: 'Neki tekst',
  };

  state={
    posts: [],
  }


  componentWillMount() {
    fetch('https://jquery-test-api-auth.herokuapp.com/posts')
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      console.log(resp)
      this.setState({posts: resp})
    })
    .catch(error => {
      console.log(error)
    })
  }

render() {
    return (
      <View>
      <ScrollView>
      <Text style={styles.contentContainer1}>Hello from Posts</Text>
      <FlatList
      data={this.state.posts}
      renderItem={({item}) => <Text style={styles.listStyle}> <Text>br:</Text> {item.id}, {item.title}, {item.body} </Text>}
      />
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style={styles.textPostStyle}> Dodaj Post </Text>
       </TouchableOpacity>
      <Button title="Home Screen" onPress={() => this.props.navigation.navigate('HomeScreen')}  />
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
})