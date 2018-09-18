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

  checkToken() {
    AsyncStorage.getItem('userToken').then((token) => {
      this.props.navigation.navigate(token ? 'App' : 'Auth')
    })
    

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    
  }

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