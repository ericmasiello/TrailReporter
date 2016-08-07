import React, {Component} from 'react';
import Permissions from 'react-native-permissions';
import WorkflowHOC from '../../components/WorkflowHOC';

export default function LocationHOC(Wrapped) {
  class LocationHOCComponent extends Component {
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
      const {onUserSetLocation, goTo} = this.props;
      if(!this.state.hasLocationPermissions) {
        goTo('LOCATION_PERMISSIONS')();
        return;
      }

      navigator.geolocation.getCurrentPosition(position => {
        onUserSetLocation(position.coords)
        goTo('TAKE_PHOTO')();
      });
    }

    render(){
      return <Wrapped {...this.props} reportAnIssue={this.reportAnIssue} goBack={this.goBack} />
    }
  }

  return WorkflowHOC(LocationHOCComponent);
}
