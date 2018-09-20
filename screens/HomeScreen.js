import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import { createSwitchNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         <Text> Ovo je home screen</Text>
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
  contentContainer: {
    paddingTop: 100,
    fontSize: 25,
  },
});
