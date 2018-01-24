import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from '../../../components/Loader';

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
