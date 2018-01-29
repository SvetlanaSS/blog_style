import React from 'react';
import { shallow } from 'enzyme';
import ConnectedApp, { App } from '../../../components/App/App.js';
import configureStore from 'redux-mock-store';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { auth: { authenticated: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedApp store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
