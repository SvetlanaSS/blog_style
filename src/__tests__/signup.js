import React from 'react';
import { mount } from 'enzyme';
import { SignUpForm } from '../components/AuthorisationForm/SignUpForm';

const nameEvent = { target: { name: 'name', value: 'John Doe' }};
const emailEvent = { target: { name: 'email', value: 'admin@gmail.com' }};
const passwordEvent = { target: { name: 'password', value: 'password' }};

it('simulate signup failed with an empty name', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
});

it('simulate signup failed with an unvalid short password', () => {
  const wrapper = mount(<SignUpForm signUpUser={jest.fn()} />);
  wrapper.find('input[name="name"]').simulate('change', nameEvent);
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', { target: { name: 'password', value: '123' }});
  expect(wrapper.find('.hasDanger').exists()).toBeTruthy();
  expect(wrapper.find('input[name="password"]').closest('div').text()).toEqual('Password is too short!');
  //expect(wrapper.find('div').text());
});

it('', () => {

});

it('', () => {

});
