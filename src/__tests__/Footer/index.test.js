import React from 'react';
import Footer from '../../components/Footer';
import { mount } from 'enzyme';

fit('a tags contain social media links', () => {
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
