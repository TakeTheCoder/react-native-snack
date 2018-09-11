import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';

const WelcomeSwitch = createSwitchNavigator({
  Welcome: WelcomeScreen,
});

const SignUpSwitch = createSwitchNavigator({
  SignUp: SignUpScreen,
});

const LogInSwitch = createSwitchNavigator({
  LogIn: LogInScreen,
});

export default createSwitchNavigator(
  {
    Welcome: WelcomeSwitch,
    SignUp: SignUpSwitch,
    LogIn: LogInSwitch,
  },
  {
  initialRouteName: 'Welcome',
  }
);