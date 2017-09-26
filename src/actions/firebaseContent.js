import firebase from '../api/firebase';
import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
  FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FORCE_FETCH_DATA_FROM_FIREBASE_ERROR,
  APPLY_FILTER_FASHION_TODAYS_POSTS,
  APPLY_FILTER_BEAUTY_TODAYS_POSTS,
  APPLY_FILTER_FITNESS_TODAYS_POSTS,
} from './types';

export function todaysPostsFilter(location) {
  return (dispatch, getState) => {
    const { firebaseContent: { fashion, beauty, fitness } } = getState();
    if (location.includes('fashion')) {
      const fashionData = fashion.filter(item => {
        return item.date === '2017-09-12';
      });
      dispatch({ type: APPLY_FILTER_FASHION_TODAYS_POSTS, fashionData });
    } else if (location.includes('beauty')) {
      const beautyData = beauty.filter(item => {
        return item.date === '2017-09-12';
      });
      dispatch({ type: APPLY_FILTER_BEAUTY_TODAYS_POSTS, beautyData });
    } else if (location.includes('fitness')) {
      const fitnessData = fitness.filter(item => {
        return item.date === '2017-09-12';
      });
      dispatch({ type: APPLY_FILTER_FITNESS_TODAYS_POSTS, fitnessData });
    } else {
      return null;
    }
  };
}

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
