import {combineReducers} from 'redux';
import AuthStateReducer from '../modules/auth/';
import {LocationReducer} from '../modules/start';
import {OnboardingReducer} from '../modules/onboarding';

const reducers = combineReducers({
  // Authentication/login state
  auth: AuthStateReducer,
  location: LocationReducer,
  completedOnboarding: OnboardingReducer
});

export default function mainReducer(state, action) {
  return reducers(state || void 0, action);
}
