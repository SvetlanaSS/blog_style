import {
  SHOW_MODAL_ADD_COMMENT,
  HIDE_MODAL_ADD_COMMENT,
} from '../actions/types';

const initialState = {
  showModalAddComment: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_MODAL_ADD_COMMENT:
    return {
      showModalAddComment: true,
    };
  case HIDE_MODAL_ADD_COMMENT:
    return {
      showModalAddComment: false,
    };
  default:
    return state;
  }
}
