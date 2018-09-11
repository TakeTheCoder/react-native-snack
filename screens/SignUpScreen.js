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
  TextInput,
} from 'react-native';

export default class SignUpScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text> Fill this form to sign up </Text>
        <TextInput style={styles.textInput} placeholder="E-mail" placeholderTextColor='#ffffff' />
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#ffffff' />
        <TextInput style={styles.textInput} placeholder="Password confirmation" placeholderTextColor='#ffffff' />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} >Sign up</Text>
        </TouchableOpacity>

        <View style={styles.messageContainer}>
        <Text>If you already have account, please, go to</Text>
          <Button
            title="Log In"
            onPress={() => this.props.navigation.navigate('LogIn')}
          />
        </View>
        
        
       
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 50,
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