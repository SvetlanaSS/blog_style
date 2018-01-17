import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../components/AutorisationForm/LoginForm';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<LoginForm loginSuccessful={fakeLogin} />);
  const emailEvent = {target: {name: 'email', value: 'admin@gmail.com'}};
  const passwordEvent = {target: {name: 'password', value: 'admin'}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.error').exists()).toBeTruthy();
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<LoginForm loginSuccessful={fakeLogin} />);
  const emailEvent = {target: {name: 'email', value: 'admin@gmail.com'}};
  const passwordEvent = {target: {name: 'password', value: 'admin123'}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.success').exists()).toBeTruthy();
});
