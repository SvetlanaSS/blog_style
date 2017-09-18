import {
  SHOW_MODAL_ADD_COMMENT,
  HIDE_MODAL_ADD_COMMENT,
} from './types';

export function showModalAddComment() {
  return {
    type: SHOW_MODAL_ADD_COMMENT,
  };
}

export function hideModalAddComment() {
  return {
    type: HIDE_MODAL_ADD_COMMENT
  };
}
