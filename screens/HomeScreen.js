import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import LogIn from './LogIn';

import SignUp from './SignUp';

import { createSwitchNavigator } from 'react-navigation';

// import fetchPosts from '../components/api';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         <View style={styles.contentContainer1}>
          <Button title="Login in" onPress={() => this.props.navigation.navigate('LogIn')} />
          <Button title="Sign up" onPress={() => this.props.navigation.navigate('SignUp')} />
         </View>
        </ScrollView>
       </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 100,
    fontSize: 25,
  },
});
