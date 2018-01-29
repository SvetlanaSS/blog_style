import React from 'react';
import { shallow } from 'enzyme';
import ConnectedPage, { Page } from '../../../components/Page';
import configureStore from 'redux-mock-store';

const obj = { description: 'random description', text: 'random text' };
const data = [obj, obj, obj];

it('render fashion posts properly', () => {
  const wrapper = shallow(
    <Page
      fashion={data}
      location={ { pathname: '/fashion' } }
      fetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().renderPosts(data)).toBeTruthy();
});

it('render beauty posts properly', () => {
  const wrapper = shallow(
    <Page
      beauty={data}
      location={ { pathname: '/beauty' } }
      fetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().renderPosts(data)).toBeTruthy();
});

it('render fitness posts properly', () => {
  const wrapper = shallow(
    <Page
      fitness={data}
      location={ { pathname: '/fitness' } }
      fetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().renderPosts(data)).toBeTruthy();
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { firebaseContent: { fashion: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedPage store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
