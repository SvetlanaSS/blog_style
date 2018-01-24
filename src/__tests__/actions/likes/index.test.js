import {
  LIKE_POST_SUCCESS,
  LIKE_POST_ERROR,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_ERROR,
} from '../../../actions/types';
import * as actions from '../../../actions/likes';

describe('like post actions: success', () => {
  it('should like post', () => {
    const expectedAction = {
      type: LIKE_POST_SUCCESS
    };
    expect(actions.likePost()).toEqual(expectedAction);
  });
});
