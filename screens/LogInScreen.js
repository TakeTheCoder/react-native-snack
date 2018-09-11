import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class LogInScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text> Log in Screen </Text>
        <TextInput style={styles.textInput} placeholder="E-mail" placeholderTextColor='#ffffff' />
        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#ffffff' />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} >Log in</Text>
        </TouchableOpacity>

        <View style={styles.messageContainer}>
        <Text>If you don't have account, please, go to</Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
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
