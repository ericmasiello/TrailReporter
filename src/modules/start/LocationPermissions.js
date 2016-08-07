import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import BaseText from '../../components/BaseText';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import Permissions from 'react-native-permissions';
import {COMMON_STYLES, BRAND_COLOR} from '../../styles/global';

export default class LocationPermissions extends Component {
  componentDidMount() {
    const self = this;
    Permissions.getPermissionStatus('location').then(response => {
      self.setState({
        hasLocationPermissions: response === 'authorized' ? true : false
      });
    });
  }

  render() {
    return (
      <View style={[COMMON_STYLES.pageContainer, COMMON_STYLES.padTop, styles.view]}>
        <BaseText>
          In order to help us identify where problems exist, we'll ned access to your location.
        </BaseText>
        <Button onPress={this.props.reportAnIssue}>Get Started</Button>
        <LinkButton onPress={this.props.goBack}>Go Back</LinkButton>
      </View>
    );
  }
}

LocationPermissions.displayName = 'LocationPermissions';
LocationPermissions.propTypes = {
  reportAnIssue: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: BRAND_COLOR,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
