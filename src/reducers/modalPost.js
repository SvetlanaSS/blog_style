import {
  SHOW_MODAL_POST,
  HIDE_MODAL_POST,
} from '../actions/types';

const initialState = {
  showModalPost: false,
  post: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_MODAL_POST:
    return {
      showModalPost: true,
      post: action.post
    };
  case HIDE_MODAL_POST:
    return {
      showModalPost: false,
      post: {}
    };
  default:
    return state;
  }
}
