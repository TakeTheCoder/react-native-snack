import React from 'react';
import { Text, Button, AsyncStorage } from 'react-native';


export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props);
    this.logOut();
  }

  logOut(){
   
    const getUserToken = async () => {

      try {
       let userToken = await AsyncStorage.getItem('userToken');
       console.warn(userToken)
      } catch (error) {
      // Error retrieving data
        console.log(error.message);
      } 
      return userToken
    }
    let userToken = getUserToken()
    console.warn(userToken)
    
    fetch("https://jquery-test-api-auth.herokuapp.com/auth/logout", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authentication": `Bearer ${userToken}`
      }
    })
    .then((resp) => {
      console.warn(resp)
    })
    .catch((error) => {
      console.warn(error)
    })
  }


  render() {

     return <Text>Logging out...</Text>

    
  }
}
