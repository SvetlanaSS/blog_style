import firebase from '../api/firebase';
import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
  FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FORCE_FETCH_DATA_FROM_FIREBASE_ERROR,
  APPLY_FILTER_FASHION_TODAYS_POSTS,
  APPLY_FILTER_BEAUTY_TODAYS_POSTS,
  APPLY_FILTER_FITNESS_TODAYS_POSTS,
  REMOVE_FILTER_FASHION_TODAYS_POSTS,
  REMOVE_FILTER_BEAUTY_TODAYS_POSTS,
  REMOVE_FILTER_FITNESS_TODAYS_POSTS,
  APPLY_FILTERS_FASHION_MOSTS_LIKED,
  APPLY_FILTERS_BEAUTY_MOSTS_LIKED,
  APPLY_FILTERS_FITNESS_MOSTS_LIKED
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

export function removeTodaysPostsFilter(location) {
  return dispatch => {
    if (location.includes('fashion')) {
      dispatch({ type: REMOVE_FILTER_FASHION_TODAYS_POSTS });
      dispatch(fetchDataFirebase());
    } else if (location.includes('beauty')) {
      dispatch({ type: REMOVE_FILTER_BEAUTY_TODAYS_POSTS });
      dispatch(fetchDataFirebase());
    } else if (location.includes('fitness')) {
      dispatch({ type: REMOVE_FILTER_FITNESS_TODAYS_POSTS });
      dispatch(fetchDataFirebase());
    } else {
      return null;
    }
  };
}

export function mostLikedPostsFilter(location) {
  return (dispatch, getState) => {
    const { firebaseContent: { fashion, beauty, fitness } } = getState();
    if (location.includes('fashion')) {
      const fashionData = fashion.sort((a, b) => {
        return (Object.keys(a.likes).length > Object.keys(b.likes).length ? -1 : Object.keys(a.likes).length < Object.keys(b.likes).length ? 1 : 0);
      });
      dispatch({ type: APPLY_FILTERS_FASHION_MOSTS_LIKED, fashionData });
    } else if (location.includes('beauty')) {
      const beautyData = beauty.sort((a, b) => {
        return (Object.keys(a.likes).length > Object.keys(b.likes).length ? -1 : Object.keys(a.likes).length < Object.keys(b.likes).length ? 1 : 0);
      });
      dispatch({ type: APPLY_FILTERS_BEAUTY_MOSTS_LIKED, beautyData });
    } else if (location.includes('fitness')) {
      const fitnessData = fitness.sort((a, b) => {
        return (Object.keys(a.likes).length > Object.keys(b.likes).length ? -1 : Object.keys(a.likes).length < Object.keys(b.likes).length ? 1 : 0);
      });
      dispatch({ type: APPLY_FILTERS_FITNESS_MOSTS_LIKED, fitnessData });
    } else {
      return null;
    }
  };
}

export function fetchDataFirebase() {
  return (dispatch) => {
    firebase.database().ref('/').once('value')
      .then(data => {
        const response = data.val();
        dispatch({ type: FETCH_DATA_FROM_FIREBASE_SUCCESS, response });
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FROM_FIREBASE_ERROR, error });
      });
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
