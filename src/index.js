import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import App from './components/App/App.js';
import Page from './components/Page';
import registerServiceWorker from './registerServiceWorker';
import { hasLocalStorageUser } from './helpers';
import { userLoggedIn } from './actions/auth';

const store = reduxStore();

const localStorageUser = hasLocalStorageUser();
if (localStorageUser) {
  store.dispatch(userLoggedIn());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" render={() => <Redirect to="/fashion" /> }/>
          <Route path="/fashion" component={Page} />
          <Route path="/fitness" component={Page} />
          <Route path="/beauty" component={Page} />
        </App>
      </Switch>
    </Router>
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
