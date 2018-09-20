import React from 'react';
import { Text, Button, AsyncStorage } from 'react-native';


export default class LogOutScreen extends React.Component {
  constructor(props){
    super(props);
    this.logOut();
  }

  logOut(){


    AsyncStorage.getItem('userToken').then((token) => {
      fetch("https://jquery-test-api-auth.herokuapp.com/auth/logout", {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authentication": `Bearer ${ token }`
        }
      })
      .then((resp) => {
      
        if (resp.ok) {
          AsyncStorage.removeItem('userToken').then((token) => {
            this.props.navigation.navigate('AuthLoading')
          })
        } else {
          console.log(resp)
        }
        
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }


  render() {

     return <Text>Logging out...</Text>

    
  }
}
