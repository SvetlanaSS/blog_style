import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const reduxlogger = createLogger({
    collapsed: true,
    predicate: () =>
      process.env.NODE_ENV === 'development',
  });

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxlogger),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );

  return store;
}
