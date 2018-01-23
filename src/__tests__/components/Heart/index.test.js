import React from 'react';
import { mount } from 'enzyme';
import Heart from '../../../components/Heart';

const postLikes = { key1: { email: 'test@test.com' }, key2: { email: 'hi@hi.com' } };
const likesList = {  };

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('determine heart color', () => {
  const user = JSON.stringify({ email: 'test@test.com' });
  localStorage.setItem('firebase:authUser:', user);
  const wrapper = mount(
    <Heart
      route={'/fashion'}
      postLikes={postLikes}
      postId={1}
      likesList={likesList}
      forceFetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().determineHeartColor()).toBeTruthy();
});
