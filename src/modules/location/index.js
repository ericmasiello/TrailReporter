import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';
import LocationPermissions from './LocationPermissions';

const INITIAL_LOCATION_STATE = {
  lat: 0,
  lng: 0
}

// Actions
const SET_CURRENT_LOCATION = 'AppState/SET_CURRENT_LOCATION';

export function onUserSetLocation(lat, lng) {
  return {
    type: SET_CURRENT_LOCATION,
    payload: {lat, lng}
  };
}

// Reducer
export function LocationReducer(state = INITIAL_LOCATION_STATE, action = {}) {
  switch(action.type) {
    case SET_CURRENT_LOCATION:
      return action.payload
  }
  return state;
};


function mapStateToProps({location}) {
  debugger;
  return {location};
};

export const HomeContainer = connect(mapStateToProps, {onUserSetLocation})(Home);
export const LocationPermissionsContainer = connect(mapStateToProps, {onUserSetLocation})(LocationPermissions);

// var c = connect;
// var H = Home;
// var LP = LocationPermissions;
// var HC = HomeContainer;
// var LPC = LocationPermissionsContainer;

// debugger;
//
// export default {
//   HomeContainer,
//   LocationPermissionsContainer,
//   LocationReducer,
//   onUserSetLocation
// }
