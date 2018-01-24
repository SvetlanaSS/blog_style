import {
  SHOW_MODAL_POST,
  HIDE_MODAL_POST,
} from '../../../actions/types';
import reducer from '../../../reducers/modalPost';

describe('modal post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        showModalPost: false,
        post: {}
      }
    );
  });
});

it('should handle SHOW_MODAL_POST', () => {
  expect(
    reducer([], {
      type: SHOW_MODAL_POST,
      post: 'Hello blogger!'
    })
  ).toEqual(
    {
      showModalPost: true,
      post: 'Hello blogger!'
    }
  );
});

it('should handle HIDE_MODAL_POST', () => {
  expect(
    reducer([], {
      type: HIDE_MODAL_POST
    })
  ).toEqual(
    {
      showModalPost: false,
      post: {}
    }
  );
});
