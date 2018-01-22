import React from 'react';
import { mount } from 'enzyme';
import { SignUpForm } from '../../components/AuthorisationForm/SignUpForm';

const nameEvent = { target: { name: 'name', value: 'John Doe' }};
const emailEvent = { target: { name: 'email', value: 'admin@gmail.com' }};
const passwordEvent = { target: { name: 'password', value: 'password' }};

it('simulate signup failed with an empty name', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
});

it('simulate signup failed with an invalid emai', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="name"]').simulate('change', nameEvent);
  wrapper.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'admin.com' }});
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  expect(wrapper.find('.hasDanger').exists()).toBeTruthy();
  expect(wrapper.find('input[name="email"]').closest('div').text()).toEqual('Email is not valid!');
});

it('simulate signup failed with an invalid short password', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="name"]').simulate('change', nameEvent);
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', { target: { name: 'password', value: '123' }});
  expect(wrapper.find('.hasDanger').exists()).toBeTruthy();
  expect(wrapper.find('input[name="password"]').closest('div').text()).toEqual('Password is too short!');
});

it('simulate signup success', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="name"]').simulate('change', nameEvent);
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.props().signUpUser.mock.calls.length).toBe(1);
});

it('returns true with a valid email', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  const email = 'admin@gmail.com';
  expect(wrapper.instance().validateEmail(email)).toBe(true);
});

it('returns false with an invalid email', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  const email = 'admin.gmail.com';
  expect(wrapper.instance().validateEmail(email)).toBe(false);
});

it('returns true with a valid password', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  const password = 'qwerty123';
  expect(wrapper.instance().validatePassword(password)).toBe(true);
});

it('returns false with an invalid password', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  const password = '123';
  expect(wrapper.instance().validatePassword(password)).toBe(false);
});
