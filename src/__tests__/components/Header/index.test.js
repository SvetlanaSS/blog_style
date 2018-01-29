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

it('should call logout function on logout', () => {
  const signOutUser = jest.fn();
  const wrapper = shallow(<Header authenticated={true} signOutUser={signOutUser} />);
  wrapper.find('[data-test="button"]').simulate('click');
  expect(signOutUser.mock.calls.length).toBe(1);
});

it('should call search function on icon click ', () => {
  const showModalSearch = jest.fn();
  const wrapper = shallow(<Header authenticated={true} showModalSearch={showModalSearch} />);
  wrapper.find('[data-test="icon"]').simulate('click');
  expect(showModalSearch.mock.calls.length).toBe(1);
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
