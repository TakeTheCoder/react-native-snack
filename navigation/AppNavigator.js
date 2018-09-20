import React from 'react';
import {createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';



const AppStack = createStackNavigator({ Main: MainTabNavigator });
const AuthStack = createStackNavigator({ SignUp: SignUp, LogIn: LogIn, });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);