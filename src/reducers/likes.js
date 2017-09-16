import {
  LIKE_POST_SUCCESS,
  LIKE_POST_ERROR,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_ERROR,
} from '../actions/types';

const initialState = {
  like: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
  case LIKE_POST_SUCCESS:
    return {
      like: true,
    };
  case LIKE_POST_ERROR:
    return {
      like: false,
      message: action.message,
    };
  case DISLIKE_POST_SUCCESS:
    return {
      like: false,
    };
  case DISLIKE_POST_ERROR:
    return {
      like: true,
      message: action.message,
    };
  default:
    return state;
  }
}
