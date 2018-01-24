import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../../components/Menu';

it('Contains a nav element', () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper.find('nav')).toHaveLength(1);
});
