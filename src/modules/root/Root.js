import React, {Component} from 'react';
import {View, StyleSheet, Navigator} from 'react-native';
import * as auth0 from '../../services/auth0';
import DeveloperMenu from '../../components/DeveloperMenu';
//import ROUTES, {DEFAULT_ROUTE} from '../../config/routes';
import {HomeContainer, LocationPermissionsContainer} from '../location/';

const DEFAULT_ROUTE = 'HOME';
const ROUTES = {
  HOME: HomeContainer,
  LOCATION_PERMISSIONS: LocationPermissionsContainer
};

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //auth0.showLogin();
  }

  renderScene(route, navigator) {
    var routes = ROUTES;
    var defRoute = DEFAULT_ROUTE;
    const props = {
      route,
      navigator
    };

    const RenderedView = ROUTES[route.name] || ROUTES[DEFAULT_ROUTE];
    debugger;
    //const RenderedView = Location.HomeContainer;

    return <RenderedView {...props} />;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{name: ROUTES[DEFAULT_ROUTE]}}
          renderScene={this.renderScene}
          style={{padding: 0, flex: 1}}>
        </Navigator>
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}
