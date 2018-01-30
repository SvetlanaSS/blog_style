import React from 'react';
import { mount, shallow } from 'enzyme';
import ConnectedSearch, { Search } from '../../../components/Search';
import configureStore from 'redux-mock-store';

it('should render self and subcomponents', () => {
  const wrapper = mount(
    <Search
      removeTodaysPostsFilter={jest.fn()}
      hideModalSearch={jest.fn()}
      todaysPostsFilter={jest.fn()}
      mostLikedPostsFilter={jest.fn()}
      removeMostLikedPostsFilter={jest.fn()}
      searchByHashtag={jest.fn()}
      fetchDataFirebase={jest.fn()}
    />);
  expect(wrapper.props().removeTodaysPostsFilter).toBeDefined();
  expect(wrapper.props().hideModalSearch).toBeDefined();
  expect(wrapper.props().todaysPostsFilter).toBeDefined();
  expect(wrapper.props().mostLikedPostsFilter).toBeDefined();
  expect(wrapper.props().removeMostLikedPostsFilter).toBeDefined();
  expect(wrapper.props().searchByHashtag).toBeDefined();
  expect(wrapper.props().fetchDataFirebase).toBeDefined();
});

it('should close search modal on click cross icon', () => {
  const hideModalSearch = jest.fn();
  const wrapper = shallow(<Search hideModalSearch={hideModalSearch} />);
  wrapper.find('[data-test="cross-icon"]').simulate('click');
  expect(hideModalSearch.mock.calls.length).toBe(1);
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { modalSearch: { showModalSearch: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedSearch store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
