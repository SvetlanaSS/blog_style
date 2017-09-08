import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../actions/types';

const initialState = {
  showLoader: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
  case SHOW_LOADER:
    return {
      showLoader: true,
    };
  case HIDE_LOADER:
    return {
      showLoader: false,
    };
  default:
    return state;
  }
}
