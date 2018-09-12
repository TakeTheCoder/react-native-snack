import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import PostsScreen from '../screens/PostsScreen';

const HomeSwitch = createSwitchNavigator({
  Home: HomeScreen,
});

const SignUpSwitch = createSwitchNavigator({
  SignUp: SignUpScreen,
});

const LogInSwitch = createSwitchNavigator({
  LogIn: LogInScreen,
});

const PostsSwitch = createSwitchNavigator({
  Posts: PostsScreen,
});

export default createSwitchNavigator(
  {
    Home: HomeSwitch,
    SignUp: SignUpSwitch,
    LogIn: LogInSwitch,
    Posts: PostsSwitch,
  },
  {
  initialRouteName: 'Home',
  }
);