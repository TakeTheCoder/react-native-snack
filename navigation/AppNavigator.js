import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LogInScreen from './../screens/LogInScreen';
import SignUpScreen from './../screens/SignUpScreen';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({ Main: MainTabNavigator });
const AuthStack = createStackNavigator({ SignUp: SignUpScreen, LogIn: LogInScreen });

export default createSwitchNavigator({

    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);