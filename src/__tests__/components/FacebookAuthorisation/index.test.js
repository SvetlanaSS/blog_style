import React from 'react';
import { shallow } from 'enzyme';
import ConnectedFacebookAuthorisation, { FacebookAuthorisation } from '../../../components/AuthorisationForm/FacebookAuthorisation';
import configureStore from 'redux-mock-store';

it('renders without an error', () => {
  shallow(<FacebookAuthorisation />);
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { auth: { authenticated: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedFacebookAuthorisation store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
