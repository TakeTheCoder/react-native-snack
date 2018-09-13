import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';


export default class SignUp extends React.Component {
  static navigationOptions = {
     header: null,
  };


render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from Sign Up</Text>
      <TextInput style={[styles.contentInput, styles.contentContainer]} placeholder="E-mail" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} secureTextEntry={true} placeholder="Password" />
      <TextInput style={[styles.contentInput, styles.contentContainer]} secureTextEntry={true} placeholder="Repeat-password" />
      <Button title="Sign Up" />
      <Button title="Home Screen" onPress={() => this.props.navigation.navigate('HomeScreen')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer1: {
  paddingTop: 70, 
  },

  contentInput: {
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },

  contentContainer: {
    padding: 15,
    fontSize: 20,
  },

})