import React from 'react';
import { mount } from 'enzyme';
import { AddComment } from '../../../components/AddComment';

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

fit('simulate add comment', () => {
  const user = JSON.stringify({ email: 'test@test.com', id: 1 });
  localStorage.setItem('firebase:authUser:', user);
  const wrapper = mount(
    <AddComment
      hideModalAddComment={jest.fn()}
      forceFetchDataFirebase={jest.fn()}
      showModalAddComment={true}
      post={ { id: 1 } }
    />
  );
  const comment = 'Nice post';
  const commentEvent = { target: { name: 'comment', value: comment }};
  wrapper.find('textarea[name="comment"]').simulate('change', commentEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.state('comment')).toBe(comment);
});
