import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App.js';
import reduxStore from '../store';
const store = reduxStore();

it('renders without crashing', () => {
  shallow(<App store={store} />);
});
