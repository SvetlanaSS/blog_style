import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions/types';

const initialState = {
  showModal: false,
  post: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_MODAL:
    return {
      showModal: true,
      post: action.post
    };
  case HIDE_MODAL:
    return {
      showModal: false,
      post: {}
    };
  default:
    return state;
  }
}
