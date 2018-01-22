import React from 'react';
import Footer from '../../components/Footer';
import { mount } from 'enzyme';

it('a tags contains social media links', () => {
  const result = [
    'https://www.facebook.com/',
    'https://www.instagram.com',
    'https://twitter.com',
    'https://www.pinterest.com/'
  ];
  const wrapper = mount(<Footer />);
  const socialUrls = wrapper.find('a').map(node => node.props().href);
  expect(socialUrls).toEqual(result);
});
