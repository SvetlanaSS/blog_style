import { combineReducers } from 'redux';
import auth from './auth';
import loader from './loader';
import modal from './modal';
import firebaseContent from './firebaseContent';

const rootReducer = combineReducers({
  auth,
  loader,
  modal,
  firebaseContent
});

export default rootReducer;
