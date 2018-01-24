import {
  SHOW_MODAL_ADD_COMMENT,
  HIDE_MODAL_ADD_COMMENT,
} from '../../../actions/types';
import reducer from '../../../reducers/modalAddComment';

describe('add comment reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        showModalAddComment: false,
        post: {},
        pathname: null
      }
    );
  });
});

it('should handle SHOW_MODAL_ADD_COMMENT', () => {
  expect(
    reducer([], {
      type: SHOW_MODAL_ADD_COMMENT,
      post: 'Hello blogger!',
      pathname: 'fashion'
    })
  ).toEqual(
    {
      showModalAddComment: true,
      post: 'Hello blogger!',
      pathname: 'fashion'
    }
  );
});

it('should handle HIDE_MODAL_ADD_COMMENT', () => {
  expect(
    reducer([], {
      type: HIDE_MODAL_ADD_COMMENT
    })
  ).toEqual(
    {
      showModalAddComment: false,
      post: {},
      pathname: {}
    }
  );
});
