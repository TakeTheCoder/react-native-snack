import React from "react";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import Posts from "../components/posts";
import SignUp from "../components/SignUp";
import HomeScreen from "../screens/HomeScreen";

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Posts: Posts,
  SignUp: SignUp,
  HomeScreen: HomeScreen
});
