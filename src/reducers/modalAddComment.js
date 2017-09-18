import {
  SHOW_MODAL_ADD_COMMENT,
  HIDE_MODAL_ADD_COMMENT,
} from '../actions/types';

const initialState = {
  showModalAddComment: false,
  post: {},
  pathname: null
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_MODAL_ADD_COMMENT:
    return {
      showModalAddComment: true,
      post: action.post,
      pathname: action.pathname
    };
  case HIDE_MODAL_ADD_COMMENT:
    return {
      showModalAddComment: false,
      post: {},
      pathname: {}
    };
  default:
    return state;
  }
}
