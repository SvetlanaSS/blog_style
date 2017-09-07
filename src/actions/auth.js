import firebase from '../api/firebase';

import {
  AUTH_STARTED,
  AUTH_ERROR,
  USER_AUTHORIZED,
  USER_LOGGED_OUT,
} from './types';

export function signInUser(email, password) {
  return dispatch => {
    dispatch({ type: AUTH_STARTED });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: USER_AUTHORIZED });
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          dispatch({ type: AUTH_ERROR, message: 'Wrong password.' });
        } else {
          dispatch({ type: AUTH_ERROR, message: error.message });
        }
      });
  };
}

export function signOutUser() {
  return dispatch => {
    dispatch({ type: USER_LOGGED_OUT });
    return firebase.auth().signOut();
  };
}
