import {connect} from 'react-redux';
import Home from './Home';
import LocationPermissions from './LocationPermissions';
import LocationHOC from './LocationHOC';

const INITIAL_LOCATION_STATE = {
  accuracy: 0,
  altitude: 0,
  altitudeAccuracy: 0,
  heading: 0,
  latitude: 0,
  longitude: 0,
  speed: 0
};

// Actions
const SET_CURRENT_LOCATION = 'AppState/SET_CURRENT_LOCATION';

export function onUserSetLocation(payload) {
  return {
    type: SET_CURRENT_LOCATION,
    payload
  };
}

// Reducer
export function LocationReducer(state = INITIAL_LOCATION_STATE, action = {}) {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return action.payload;
    default:
      return state;
  }
}

function mapStateToProps({location}) {
  return {location};
}

export const HomeContainer = connect(mapStateToProps, {onUserSetLocation})(LocationHOC(Home));
export const LocationPermissionsContainer =
  connect(mapStateToProps, {onUserSetLocation})(LocationHOC(LocationPermissions));
