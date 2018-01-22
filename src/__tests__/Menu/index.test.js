import React from 'react';
import Routes from '../../index.js';
import { Route } from 'react-router';
import { shallow } from 'enzyme';

fit('menu contains 3 links', () => {
  // const result = [
  //   'https://www.facebook.com/',
  //   'https://www.instagram.com',
  //   'https://twitter.com',
  //   'https://www.pinterest.com/'
  // ];
  const wrapper = shallow(<Routes />);
  console.log(wrapper.find(Route));
  //const socialUrls = wrapper.find('ul').map(node => node.props().href);
  //expect(socialUrls).toEqual(result);

});
