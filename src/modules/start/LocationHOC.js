/* global navigator */
import React, {Component} from 'react';
import WorkflowHOC from '../../components/WorkflowHOC';

export default function LocationHOC(Wrapped) {
  class LocationHOCComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {hasLocationPermissions: false};
      this.reportAnIssue = this.reportAnIssue.bind(this);
    }

    reportAnIssue() {
      const {onUserSetLocation, goTo} = this.props;
      // FXIME...
      // if(!this.state.hasLocationPermissions) {
      //   goTo('LOCATION_PERMISSIONS')();
      //   return;
      // }

      navigator.geolocation.getCurrentPosition(position => {
        onUserSetLocation(position.coords);
        goTo('TAKE_PHOTO')();
      });
    }

    render() {
      return <Wrapped {...this.props} reportAnIssue={this.reportAnIssue} goBack={this.goBack} />;
    }
  }

  LocationHOCComponent.displayName = 'LocationHOCComponent';
  LocationHOCComponent.propTypes = {
    onUserSetLocation: React.PropTypes.func.isRequired,
    goTo: React.PropTypes.func.isRequired
  };

  return WorkflowHOC(LocationHOCComponent);
}
