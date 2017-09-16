import firebase from '../api/firebase';
import { showLoader, hideLoader } from './loader';
import {
  AUTH_STARTED,
  AUTH_ERROR,
  USER_AUTHORIZED,
  USER_LOGGED_OUT,
} from './types';

export function signInUser(email, password) {
  return dispatch => {
    dispatch({ type: AUTH_STARTED });
    dispatch(showLoader());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: USER_AUTHORIZED });
        dispatch(hideLoader());
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          dispatch({ type: AUTH_ERROR, message: 'Wrong password.' });
        } else {
          dispatch({ type: AUTH_ERROR, message: error.message });
          dispatch(hideLoader());
        }
      });
  };
}

export function userLoggedIn() {
  return {
    type: USER_AUTHORIZED
  };
}

export function signOutUser() {
  return dispatch => {
    dispatch({ type: USER_LOGGED_OUT });
    return firebase.auth().signOut();
  };
}
