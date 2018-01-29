import React from 'react';
import { shallow } from 'enzyme';
import ConnectedLoader, { Loader } from '../../../components/Loader';
import configureStore from 'redux-mock-store';

it('does not show loader on false props', () => {
  const loader = { showLoader: false };
  const wrapper = shallow(<Loader loader={loader} />);
  expect(wrapper.hasClass('loading')).toBe(false);
});

it('shows loader on true props', () => {
  const loader = { showLoader: true };
  const wrapper = shallow(<Loader loader={loader} />);
  expect(wrapper.hasClass('loading')).toBe(true);
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { loader: true };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedLoader store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
