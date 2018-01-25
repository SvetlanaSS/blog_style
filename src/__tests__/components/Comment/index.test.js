import React from 'react';
import { shallow } from 'enzyme';
import { AddComment } from '../../../components/CommentAdd';

const comment = 'Nice post';

xit('simulate add comment', () => {
  const wrapper = shallow(<AddComment />);
  const commentEvent = {target: {name: 'comment', value: comment}};
  //console.log(wrapper.find('textarea[name="comment"]').simulate('change', commentEvent));
  wrapper.find('textarea[name="comment"]').simulate('change', commentEvent);
  console.log(wrapper.find('textarea[name="comment"]').simulate('change', commentEvent));
  //console.log(wrapper.find('data-test="form"')).simulate('submit');
  console.log(wrapper.find('button').at(0).props());
  //wrapper.find('button').at(0).simulate('submit');
  //expect(wrapper.state('comment')).toBe(comment);
});
