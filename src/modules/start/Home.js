import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export default (props) => {
  return(
    <View style={styles.home}>
      <Text style={styles.homeText}>This is the home page</Text>
      <Button onPress={props.reportAnIssue}>Report an issue</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeText: {
    color: 'white'
  }
});
