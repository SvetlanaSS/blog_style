import React from 'react';
import ConnectedHeader, { Header } from '../../../components/Header';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

it('renders without a error', () => {
  shallow(<Header />);
});

it('header contains logo', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').html()).toContain('<img src="logo.png" alt="logo"/>');
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { auth: { authenticated: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedHeader store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
