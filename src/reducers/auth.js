import {
  AUTH_STARTED,
  AUTH_ERROR,
  USER_AUTHORIZED,
  USER_LOGGED_OUT,
} from '../actions/types';

const initialState = {
  authenticated: false,
  message: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
  case AUTH_STARTED:
    return {
      authenticated: false,
    };
  case USER_AUTHORIZED:
    return {
      authenticated: true,
    };
  case USER_LOGGED_OUT:
    return {
      authenticated: false,
    };
  case AUTH_ERROR:
    return {
      authenticated: false,
      message: 'Error',
    };
  default:
    return state;
  }
}
