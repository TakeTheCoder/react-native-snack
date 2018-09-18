import React from 'react';
import { createSwitchNavigator } from 'react-navigation';


import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import Posts from '../screens/Posts';


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  HomeScreen: HomeScreen,
  LogIn: LogIn,
  SignUp: SignUp,
  Posts: Posts
});