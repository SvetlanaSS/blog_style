import React from 'react';
import { mount, shallow } from 'enzyme';
import ConnectedBlogPostModal, { BlogPostModal } from '../../../components/BlogPostModal';
import configureStore from 'redux-mock-store';

it('should render one like in the blogpost modal', () => {
  const like = ['i like it'];
  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments: [1, 3, 4],
    likes: like
  };

  const wrapper = mount(
    <BlogPostModal
      post={post}
      showModalPost={true}
    />
  );
  expect(wrapper.instance().renderLikes().props.children).toEqual(expect.arrayContaining([like.length, ' Like']));
});

it('should render multiple likes in the  blogpost modal', () => {
  const likes = ['like', 'like', 'like', 'like'];
  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments: [1, 3, 4],
    likes
  };

  const wrapper = mount(
    <BlogPostModal
      post={post}
      showModalPost={true}
    />
  );
  expect(wrapper.instance().renderLikes().props.children).toEqual(expect.arrayContaining([likes.length, ' Likes']));
});

it('should render one comment in the blogpost modal', () => {
  const comment = ['awesome comment'];
  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments: comment,
    likes: ['like']
  };

  const wrapper = mount(
    <BlogPostModal
      post={post}
      showModalPost={true}
    />
  );
  expect(wrapper.instance().renderComments().props.children).toEqual(expect.arrayContaining([comment.length, ' Comment']));
});

it('should render multiple comments in the  blogpost modal', () => {
  const comments = ['comment', 'comment', 'comment', 'comment'];
  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments,
    likes: ['like']
  };

  const wrapper = mount(
    <BlogPostModal
      post={post}
      showModalPost={true}
    />
  );
  expect(wrapper.instance().renderComments().props.children).toEqual(expect.arrayContaining([comments.length, ' Comments']));
});

describe('Shallow + passing the {store} directly', () =>{
  const initialState = { modalPost: { showModalPost: true } };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedBlogPostModal store={store} /> );
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
