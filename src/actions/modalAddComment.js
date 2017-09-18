import {
  SHOW_MODAL_ADD_COMMENT,
  HIDE_MODAL_ADD_COMMENT,
} from './types';

export function showModalAddComment(post, pathname) {
  return {
    type: SHOW_MODAL_ADD_COMMENT,
    post: post,
    pathname: pathname
  };
}

export function hideModalAddComment() {
  return {
    type: HIDE_MODAL_ADD_COMMENT
  };
}
