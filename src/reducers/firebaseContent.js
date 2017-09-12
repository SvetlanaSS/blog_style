import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
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
  default:
    return state;
  }
}
