import { AUTH_USER, SIGN_OUT_USER } from '../actions/types';

const login = (state = {}, action) => {
  switch (action.type) {
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
