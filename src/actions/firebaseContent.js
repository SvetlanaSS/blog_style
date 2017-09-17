import firebase from '../api/firebase';
import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
  FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FORCE_FETCH_DATA_FROM_FIREBASE_ERROR
} from './types';

export function fetchDataFirebase() {
  return (dispatch, getState) => {
    const { firebaseContent } = getState();
    if (!firebaseContent.fashion.length) {
      firebase.database().ref('/').once('value')
        .then(data => {
          const response = data.val();
          dispatch({ type: FETCH_DATA_FROM_FIREBASE_SUCCESS, response });
        })
        .catch(error => {
          dispatch({ type: FETCH_DATA_FROM_FIREBASE_ERROR, error });
        });
    }
  };
}

export function forceFetchDataFirebase() {
  return dispatch => {
    firebase.database().ref('/').once('value')
      .then(data => {
        const response = data.val();
        dispatch({ type: FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS, response });
      })
      .catch(error => {
        dispatch({ type: FORCE_FETCH_DATA_FROM_FIREBASE_ERROR, error });
      });
  };
}
