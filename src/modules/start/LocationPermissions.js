import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';

export default (props) => {
  return(
    <View style={styles.home}>
      <Text style={styles.homeText}>In order to help us identify where problems exist, we'll ned access to your location.</Text>
      <Button onPress={props.reportAnIssue}>Get Started</Button>
      <LinkButton onPress={props.goBack}>Go Back</LinkButton>
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
