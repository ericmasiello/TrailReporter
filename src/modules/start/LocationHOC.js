import React, {Component} from 'react';
import Permissions from 'react-native-permissions';

export default function LocationHOC(Wrapped) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {hasLocationPermissions: false};
      this.reportAnIssue = this.reportAnIssue.bind(this);
      this.goBack = this.goBack.bind(this);
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
      const {onUserSetLocation, navigator: routeNavigator} = this.props;
      if(!this.state.hasLocationPermissions) {
        routeNavigator.push({name: 'LOCATION_PERMISSIONS'});
        return;
      }

      navigator.geolocation.getCurrentPosition(position => {
        onUserSetLocation(position.coords)
        routeNavigator.push({name: 'TAKE_PHOTO'});
      });
    }

    goBack() {
      this.props.navigator.pop();
    }

    render(){
      return <Wrapped {...this.props} reportAnIssue={this.reportAnIssue} goBack={this.goBack} />
    }
  }
}
