import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
  FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FORCE_FETCH_DATA_FROM_FIREBASE_ERROR,
  APPLY_FILTER_FASHION_TODAYS_POSTS,
  APPLY_FILTER_BEAUTY_TODAYS_POSTS,
  APPLY_FILTER_FITNESS_TODAYS_POSTS,
  APPLY_FILTERS_FASHION_MOSTS_LIKED,
  APPLY_FILTERS_BEAUTY_MOSTS_LIKED,
  APPLY_FILTERS_FITNESS_MOSTS_LIKED,
  APPLY_FILTER_FASHION_SEARCH_BY_HASHTAG,
  APPLY_FILTER_BEAUTY_SEARCH_BY_HASHTAG,
  APPLY_FILTER_FITNESS_SEARCH_BY_HASHTAG,
} from '../actions/types';

const initialState = {
  fashion: [],
  beauty: [],
  fitness: [],
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
  case FETCH_DATA_FROM_FIREBASE_SUCCESS:
    return {
      fashion: action.response.fashion,
      beauty: action.response.beauty,
      fitness: action.response.fitness
    };
  case FETCH_DATA_FROM_FIREBASE_ERROR:
    return {
      error: action.error,
    };
  case FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS:
    return {
      fashion: action.response.fashion,
      beauty: action.response.beauty,
      fitness: action.response.fitness
    };
  case FORCE_FETCH_DATA_FROM_FIREBASE_ERROR:
    return {
      error: action.error
    };
  case APPLY_FILTER_FASHION_TODAYS_POSTS:
    return {
      fashion: action.fashionData
    };
  case APPLY_FILTER_BEAUTY_TODAYS_POSTS:
    return {
      beauty: action.beautyData
    };
  case APPLY_FILTER_FITNESS_TODAYS_POSTS:
    return {
      fitness: action.fitnessData
    };
  case APPLY_FILTERS_FASHION_MOSTS_LIKED:
    return {
      fashion: action.fashionData
    };
  case APPLY_FILTERS_BEAUTY_MOSTS_LIKED:
    return {
      beauty: action.beautyData
    };
  case APPLY_FILTERS_FITNESS_MOSTS_LIKED:
    return {
      fitness: action.fitnessData
    };
  case APPLY_FILTER_FASHION_SEARCH_BY_HASHTAG:
    return {
      fashion: action.fashionData
    };
  case APPLY_FILTER_BEAUTY_SEARCH_BY_HASHTAG:
    return {
      beauty: action.beautyData
    };
  case APPLY_FILTER_FITNESS_SEARCH_BY_HASHTAG:
    return {
      fitness: action.fitnessData
    };
  default:
    return state;
  }
}
