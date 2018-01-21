import React from 'react';
import { mount } from 'enzyme';
import { SignUpForm } from '../components/AuthorisationForm/SignUpForm';

// const nameEvent = { target: { name: 'name', value: 'John Doe' }};
const emailEvent = { target: { name: 'email', value: 'admin@gmail.com' }};
const passwordEvent = { target: { name: 'password', value: 'password' }};

it('simulate signup failed without a name', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
});
