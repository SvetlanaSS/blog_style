import {
  SHOW_MODAL_SEARCH,
  HIDE_MODAL_SEARCH,
} from '../actions/types';

const initialState = {
  showModalSearch: false
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_MODAL_SEARCH:
    return {
      showModalSearch: true
    };
  case HIDE_MODAL_SEARCH:
    return {
      showModalSearch: false
    };
  default:
    return state;
  }
}
