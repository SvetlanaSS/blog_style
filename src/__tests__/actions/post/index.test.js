import {
  SHOW_MODAL_POST,
  HIDE_MODAL_POST,
} from '../../../actions/types';
import * as actions from '../../../actions/modalPost';

describe('modal post actions: show', () => {
  it('should show a post in modal window', () => {
    const post = 'Hello blogger!';
    const expectedAction = {
      type: SHOW_MODAL_POST,
      post
    };
    expect(actions.showModalPost(post)).toEqual(expectedAction);
  });
});

describe('modal post actions: hide', () => {
  it('should hide modal post', () => {
    const expectedAction = {
      type: HIDE_MODAL_POST
    };
    expect(actions.hideModalPost()).toEqual(expectedAction);
  });
});
