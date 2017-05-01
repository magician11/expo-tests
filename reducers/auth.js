import { AUTH_USER, SIGN_OUT_USER, LOGGING_IN } from '../actions/types';

const login = (state = { isLoggedIn: false, isLoggingIn: false }, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case SIGN_OUT_USER:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default login;
