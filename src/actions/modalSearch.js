import {
  SHOW_MODAL_SEARCH,
  HIDE_MODAL_SEARCH,
} from './types';

export function showModalSearch() {
  return {
    type: SHOW_MODAL_SEARCH
  };
}

export function hideModalSearch() {
  return {
    type: HIDE_MODAL_SEARCH
  };
}
