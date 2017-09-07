import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './store';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

const store = reduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept(Provider, () => {
    const NextApp = require(Provider).default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}
