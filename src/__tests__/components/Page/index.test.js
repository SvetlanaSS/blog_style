import React from 'react';
import { shallow } from 'enzyme';
import { Page } from '../../../components/Page';

const obj = { description: 'random description', text: 'random text' };
const data = [obj, obj, obj];

it('render fashion posts properly', () => {
  const wrapper = shallow(
    <Page
      fashion={data}
      location={ { pathname: '/fashion' } }
      fetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().renderPosts(data)).toBeTruthy();
});

it('render beauty posts properly', () => {
  const wrapper = shallow(
    <Page
      beauty={data}
      location={ { pathname: '/beauty' } }
      fetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().renderPosts(data)).toBeTruthy();
});

it('render fitness posts properly', () => {
  const wrapper = shallow(
    <Page
      fitness={data}
      location={ { pathname: '/fitness' } }
      fetchDataFirebase={jest.fn()}
    />
  );
  expect(wrapper.instance().renderPosts(data)).toBeTruthy();
});
