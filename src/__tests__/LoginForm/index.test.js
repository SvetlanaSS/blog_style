import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from '../../components/AuthorisationForm/LoginForm';
const email = 'admin@gmail.com';
const wrongPassword = 'admin';
const correctPassword = 'admin123';

it('simulate login failed', () => {
  const wrapper = mount(<LoginForm signInUser={jest.fn()} />);
  const emailEvent = {target: {name: 'email', value: email}};
  const passwordEvent = {target: {name: 'password', value: wrongPassword}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.hasDanger').exists()).toBeTruthy();
});


it('simulate login success', () => {
  const wrapper = mount(<LoginForm signInUser={jest.fn()} />);
  const emailEvent = {target: {name: 'email', value: email}};
  const passwordEvent = {target: {name: 'password', value: correctPassword}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.state('emailError')).toBe(false);
  expect(wrapper.state('passwordError')).toBe(false);
  expect(wrapper.state('email')).toBe(email);
  expect(wrapper.state('password')).toBe(correctPassword);
});

it('Log in button is disabled', () => {
  const wrapper = mount(<LoginForm signInUser={jest.fn()} />);
  expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
});
