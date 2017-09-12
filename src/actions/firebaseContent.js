import firebase from '../api/firebase';
import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
} from './types';

export function fetchDataFirebase() {
  return dispatch => {
    firebase.database().ref('/fitness/').once('value')
      .then(data => {
        const response = data.val();
        dispatch({ type: FETCH_DATA_FROM_FIREBASE_SUCCESS, response });
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FROM_FIREBASE_ERROR, error });
      });
  };
}
