import {combineReducers} from 'redux';
import AuthStateReducer from '../modules/auth/AuthState';

const reducers = combineReducers({
  // Authentication/login state
  auth: AuthStateReducer
});

export default function mainReducer(state, action) {
  return reducers(state || void 0, action);
}
