import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './../screens/HomeScreen';
import PostsScreen from './../screens/PostsScreen';
import LogInScreen from './../screens/LogInScreen';
import SignUpScreen from './../screens/SignUpScreen';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';

//import AuthButtons from './AuthButtons';
//import MainTabNavigator from './MainTabNavigator';
const AppStack = createStackNavigator({ Home: HomeScreen, Posts: PostsScreen });
const AuthStack = createStackNavigator({ SignUp: SignUpScreen, LogIn: LogInScreen });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
  //Main: MainTabNavigator,
);