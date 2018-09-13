import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this.checkToken();
  }

  // Fetch the token from storage then navigate to our appropriate place
  //checkToken = fetch("https://jquery-test-api-auth.herokuapp.com", {
    //dataType: 'json',
    //headers:{
    //"Authentication": `Bearer ${ AsyncStorage.getItem('userToken')}`
    //} 
  //})
  checkToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});