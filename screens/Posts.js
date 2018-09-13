import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';



export default class LogIn extends React.Component {
  static navigationOptions = {
     header: 'Neki tekst',
  };

  

render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from Posts</Text>
      <Button title="Home Screen" onPress={() => this.props.navigation.navigate('HomeScreen')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer1: {
  paddingTop: 70, 
  },

})