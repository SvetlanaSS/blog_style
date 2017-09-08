import { combineReducers } from 'redux';
import auth from './auth';
import loader from './loader';

const rootReducer = combineReducers({
  auth,
  loader,
});

export default rootReducer;
