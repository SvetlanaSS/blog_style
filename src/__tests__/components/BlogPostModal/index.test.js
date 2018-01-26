import React from 'react';
import { mount } from 'enzyme';
import { BlogPostModal } from '../../../components/BlogPostModal';

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
