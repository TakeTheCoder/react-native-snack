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
} from 'react-native';

export default class WelcomeScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text> Welcome to our app, to see posts, please </Text>
        <Button title="Log In"
          onPress={() => this.props.navigation.navigate('LogIn')} />
          <Text>or</Text>
        <Button title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')} />
          <Text> if you don't already have account </Text>
        
        
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

});