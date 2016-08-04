import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as auth0 from '../../services/auth0';
import DeveloperMenu from '../../components/DeveloperMenu';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    auth0.showLogin();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1
  }
});
