import React from 'react';
import { mount } from 'enzyme';
import { Search } from '../../../components/Search';

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

function setup() {
  const props = {
    removeTodaysPostsFilter: jest.fn(),
    todaysPostsFilter: jest.fn()
  };
  const enzymeWrapper = mount(<Search {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

fit('should render self and subcomponents', () => {
  const { enzymeWrapper, props } = setup();

  enzymeWrapper.setState({ todaysPosts: true });
  console.log(props.todaysPostsFilter.mock);
});
