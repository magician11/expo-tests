import { LOGGING_IN, AUTH_USER, SIGN_OUT_USER } from '../actions/types';

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, loggingIn: true };
    case AUTH_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        loggingIn: false,
      };
    case SIGN_OUT_USER:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default login;
