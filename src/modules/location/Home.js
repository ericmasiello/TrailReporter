import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Permissions from 'react-native-permissions';
import Button from '../../components/Button';
import ROUTES from '../../config/routes';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {hasLocationPermissions: false};
    this.reportAnIssue = this.reportAnIssue.bind(this);
  }

  componentWillMount() {
    const self = this;
    Permissions.getPermissionStatus('location').then(response => {
      self.setState({
        hasLocationPermissions: response === 'authorized' ? true : false
      });
    });
  }

  reportAnIssue() {

    if(!!this.state.hasLocationPermissions) {
      this.props.navigator.push({name: 'LOCATION_PERMISSIONS'});
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    console.log('rendering home');
    return(
      <View style={styles.home}>
        <Text style={styles.homeText}>This is the home page</Text>
        <Button onPress={this.reportAnIssue}>Report an issue</Button>
      </View>
    );
  }
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
