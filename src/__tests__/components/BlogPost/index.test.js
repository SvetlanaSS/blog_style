import React from 'react';
import { shallow, mount } from 'enzyme';
import { BlogPost } from '../../../components/BlogPost';

it('renders emails of persons who liked the post', () => {
  const user = JSON.stringify({ email: 'test@test.com' });
  localStorage.setItem('firebase:authUser:', user);

  const firstEmail = 'firstEmail@test.com';
  const secondEmail = 'secondEmail@test.com';
  const likes = [{ email: firstEmail }, { email: secondEmail }];
  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments: [1, 3, 4],
    likes
  };

  const wrapper = shallow(
    <BlogPost
      post={post}
      showModalPost={true}
      forceFetchDataFirebase={jest.fn()}
      showModalAddComment={true}
      location={{ pathname: 'fashion' }}
    />
  );

  const childComp = wrapper.instance().renderPopoverLikes(likes).props.children;
  const arrayOfEmails = childComp.map(node => node.props.children);
  expect(arrayOfEmails).toEqual([firstEmail, secondEmail]);
});


it('renders emails and comments props', () => {
  const user = JSON.stringify({ email: 'test@test.com' });
  localStorage.setItem('firebase:authUser:', user);

  const firstEmail = 'firstEmail@test.com';
  const secondEmail = 'secondEmail@test.com';
  const firstComment = 'Nice post!';
  const secondComment = 'Jag vill ha det';
  const comments = {
    comment1: { email: firstEmail, comment: firstComment },
    comment2: { email: secondEmail, comment: secondComment }
  };
  const likes = [{ email: firstEmail }, { email: secondEmail }];

  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments,
    likes
  };

  const wrapper = mount(
    <BlogPost
      post={post}
      showModalPost={true}
      forceFetchDataFirebase={jest.fn()}
      showModalAddComment={true}
      location={{ pathname: 'fashion' }}
    />
  );

  expect(wrapper.props().post.comments).toEqual(comments);
  expect(wrapper.props().post.likes).toEqual(likes);
});
