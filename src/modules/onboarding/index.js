// Actions
const USER_COMPLETE_ONBOARDING = 'AppState/USER_COMPLETE_ONBOARDING';
const USER_RESET_ONBOARDING = 'AppState/USER_RESET_ONBOARDING';

export function onUserCompleteOnboarding() {
  return {
    type: USER_COMPLETE_ONBOARDING
  };
}

export function onUserResetOnboarding() {
  return {
    type: USER_RESET_ONBOARDING
  };
}

// Reducer
export function OnboardingReducer(state = false, action = {}) {
  switch (action.type) {
    case USER_COMPLETE_ONBOARDING:
      return true;
    case USER_RESET_ONBOARDING:
      return false;
    default:
      return state;
  }
}
