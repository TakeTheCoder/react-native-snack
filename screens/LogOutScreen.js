import React from 'react';
import { StyleSheet, Text, Button, View, AsyncStorage } from 'react-native';


export default class LogOut extends React.Component {
  constructor() {
    super()
    this.logOut(); 
  }


  logOut() {
    AsyncStorage.getItem('token').then(token => {
    fetch('https://jquery-test-api-auth.herokuapp.com/auth/logout', 
      { method: 'DELETE',
        headers: {
          'content-type':'application/json',
          'Authentication': `Bearer ${token}`
        },
      }
    ).then(resp => {
      console.log(resp)
      AsyncStorage.removeItem('token').then(()=> {
        this.props.navigation.navigate('Auth')
      })
    })
    .catch(error => {
      console.log(error)
    })
    })
  }
  
render() {
    return (
      <View>
      <Text style={styles.contentContainer1}>Hello from LogOut</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer1: {
  paddingTop: 70, 
  },
})