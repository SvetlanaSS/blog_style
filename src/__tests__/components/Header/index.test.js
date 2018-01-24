import React from 'react';
import { Header } from '../../../components/Header';
import { shallow } from 'enzyme';

it('renders without a error', () => {
  shallow(<Header />);
});

it('header contains logo', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').html()).toContain('<img src="logo.png" alt="logo"/>');
});
