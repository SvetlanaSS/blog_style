import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../components/AuthorisationForm/LoginForm';
import reduxStore from '../store';
const store = reduxStore();
const email = 'admin@gmail.com';
const wrongPassword = 'admin';

it('simulate login failed', () => {
  const wrapper = mount(<LoginForm store={store} />);
  const emailEvent = {target: {name: 'email', value: email}};
  const passwordEvent = {target: {name: 'password', value: wrongPassword}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.hasDanger').exists()).toBeTruthy();
});
