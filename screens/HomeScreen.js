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

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: false
    }
  }

  render(){
    const authParam = this.props.navigation.getParam('isAuthenticated');
    console.warn(authParam)
    if (authParam !== undefined){
      this.setState({isAuthenticated: authParam})
    }
    console.warn(this.state.isAuthenticated)
    return (
      (!this.state.isAuthenticated) ?
      (<View style={styles.container}>
        <Text> Welcome to our app, to see posts, please </Text>
        <Button title="Log In"
          onPress={() => this.props.navigation.navigate('LogIn', {isAuthenticated: this.state.isAuthenticated})} />
          <Text>or</Text>
        <Button title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp', {isAuthenticated: this.state.isAuthenticated})} />
          <Text> if you don't already have account</Text>
      </View>) :

      (<Text>Posts</Text>)

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