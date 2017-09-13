import { combineReducers } from 'redux';
import auth from './auth';
import loader from './loader';
import modalPost from './modalPost';
import firebaseContent from './firebaseContent';

const rootReducer = combineReducers({
  auth,
  loader,
  modalPost,
  firebaseContent
});

export default rootReducer;
