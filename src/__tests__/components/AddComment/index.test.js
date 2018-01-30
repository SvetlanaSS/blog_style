import React from 'react';
import { mount, shallow } from 'enzyme';
import ConnectedAddComment, { AddComment } from '../../../components/AddComment';
import configureStore from 'redux-mock-store';

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

it('simulate add comment', () => {
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

it('should close add comment modal on click cross icon', () => {
  const hideModalAddComment = jest.fn();
  const wrapper = shallow(<AddComment authenticated={true} hideModalAddComment={hideModalAddComment} />);
  wrapper.find('[data-test="cross-icon"]').simulate('hide');
  expect(hideModalAddComment.mock.calls.length).toBe(1);
});

it('should close add comment modal on click Cancel', () => {
  const hideModalAddComment = jest.fn();
  const wrapper = shallow(<AddComment authenticated={true} hideModalAddComment={hideModalAddComment} />);
  wrapper.find('[data-test="cancel-button"]').simulate('click');
  expect(hideModalAddComment.mock.calls.length).toBe(1);
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { modalAddComment: { showModalAddComment: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedAddComment store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
