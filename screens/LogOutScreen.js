import React from 'react';
import { Text, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { logout } from './../actions/userActions';


class LogOutScreen extends React.Component {
  constructor(props){
    super(props);
    this.props.logout();
  }




  render() {

     return <Text>Logging out...</Text>

    
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.loginErrors,
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading,
  }
}

export default connect(mapStateToProps, {
  logout
})(LogOutScreen)
