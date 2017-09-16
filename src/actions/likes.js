import firebase from '../api/firebase';
import {
  LIKE_POST_SUCCESS,
  LIKE_POST_ERROR,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_ERROR,
} from './types';

export function likePost(like) {
  return dispatch => {
    firebase.database().ref(like).set(true)
      .then(() => {
        dispatch({ type: LIKE_POST_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: LIKE_POST_ERROR, error });
      });
  };
}

export function disLikePost(like) {
  return dispatch => {
    firebase.database().ref(like).set(like + 1)
      .then(() => {
        dispatch({ type: DISLIKE_POST_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: DISLIKE_POST_ERROR, error });
      });
  };
}
