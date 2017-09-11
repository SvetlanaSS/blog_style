import { combineReducers } from 'redux';
import auth from './auth';
import loader from './loader';
import modal from './modal';

const rootReducer = combineReducers({
  auth,
  loader,
  modal,
});

export default rootReducer;
