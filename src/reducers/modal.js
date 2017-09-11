import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions/types';

const initialState = {
  showModal: false
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_MODAL:
    return {
      showModal: true,
    };
  case HIDE_MODAL:
    return {
      showModal: false,
    };
  default:
    return state;
  }
}
