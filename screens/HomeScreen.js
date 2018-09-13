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

    return (
      <View style={styles.container}>
        <Text> Welcome to our app, you are now loged in. To see posts, click here: </Text>
        <Button title="Posts"
          onPress={() => this.props.navigation.navigate('Posts')} />
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