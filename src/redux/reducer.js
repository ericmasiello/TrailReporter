import {combineReducers} from 'redux';
import AuthStateReducer from '../modules/auth/AuthState';
import {LocationReducer} from '../modules/location';

const reducers = combineReducers({
  // Authentication/login state
  auth: AuthStateReducer,
  location: LocationReducer
});

export default function mainReducer(state, action) {
  return reducers(state || void 0, action);
}
