import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';


export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super()
    this.checkLogIn();
  }

checkLogIn = () => { 
      AsyncStorage.getItem('token').then(token => {
      this.props.navigation.navigate(token ? 'App' : 'Auth' )
  })}

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
    allignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});