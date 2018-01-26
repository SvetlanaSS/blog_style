import React from 'react';
import { mount } from 'enzyme';
import { BlogPost } from '../../../components/BlogPost';

fit('should render one like in the blogpost', () => {
  const user = JSON.stringify({ email: 'test@test.com' });
  localStorage.setItem('firebase:authUser:', user);
  const likes = [{ email: 'email@email.com' }];
  const post = {
    title: 'post title',
    image_url: 'url',
    hashtag: 'hashtag',
    description: 'description',
    comments: [1, 3, 4],
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
  wrapper.find('span').at(0).simulate('mouseEnter');
  //console.log(wrapper.instance().renderPopoverLikes());

  //expect(wrapper.instance().renderPopoverLikes().props.children).toEqual(expect.arrayContaining([like.length, ' Like']));
});
