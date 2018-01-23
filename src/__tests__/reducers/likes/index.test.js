import {
  LIKE_POST_SUCCESS,
  LIKE_POST_ERROR,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_ERROR,
} from '../../../actions/types';
import reducer from '../../../reducers/likes';


describe('likes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        like: false
      }
    );
  });
});

it('should handle LIKE_POST_SUCCESS', () => {
  expect(
    reducer([], {
      type: LIKE_POST_SUCCESS
    })
  ).toEqual(
    {
      like: true
    }
  );
});

it('should handle LIKE_POST_ERROR', () => {
  expect(
    reducer([], {
      type: LIKE_POST_ERROR,
      message: 'Error message'
    })
  ).toEqual(
    {
      like: false,
      message: 'Error message'
    }
  );
});

it('should handle DISLIKE_POST_SUCCESS', () => {
  expect(
    reducer([], {
      type: DISLIKE_POST_SUCCESS
    })
  ).toEqual(
    {
      like: false
    }
  );
});

it('should handle DISLIKE_POST_ERROR', () => {
  expect(
    reducer([], {
      type: DISLIKE_POST_ERROR,
      message: 'Error message'
    })
  ).toEqual(
    {
      like: true,
      message: 'Error message'
    }
  );
});
