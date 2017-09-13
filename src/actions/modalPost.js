import {
  SHOW_MODAL_POST,
  HIDE_MODAL_POST,
} from './types';

export function showModalPost(post) {
  return {
    type: SHOW_MODAL_POST,
    post: post
  };
}

export function hideModalPost() {
  return {
    type: HIDE_MODAL_POST
  };
}
