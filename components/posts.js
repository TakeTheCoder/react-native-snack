import "react-native";
import React from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import HomeScreen from "../screens/HomeScreen";
import { createSwitchNavigator } from "react-navigation";

export default class Posts extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text style={styles.contentContainer1}>Hello from Posts</Text>
        <TextInput
          style={[styles.contentInput, styles.contentContainer]}
          placeholder="User Name"
        />
        <TextInput
          style={[styles.contentInput, styles.contentContainer]}
          placeholder="Password"
        />
        <Button title="Log in" />
        <Button
          title="Home Screen"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer1: {
    paddingTop: 70
  },

  contentInput: {
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black"
  },

  contentContainer: {
    padding: 15,
    fontSize: 20
  }
});
