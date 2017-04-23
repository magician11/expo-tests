import { LOGIN } from '../actions/types';

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};

export default login;
