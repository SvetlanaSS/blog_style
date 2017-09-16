import { combineReducers } from 'redux';
import auth from './auth';
import loader from './loader';
import modalPost from './modalPost';
import firebaseContent from './firebaseContent';
import modalSearch from './modalSearch';
import likes from './likes';

const rootReducer = combineReducers({
  auth,
  loader,
  modalPost,
  firebaseContent,
  modalSearch,
  likes
});

export default rootReducer;
