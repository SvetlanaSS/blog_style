import {
  SHOW_MODAL,
  HIDE_MODAL,
} from './types';

export function showModal(post) {
  return {
    type: SHOW_MODAL,
    post: post
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}
