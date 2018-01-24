import {
  SHOW_MODAL_ADD_COMMENT,
  HIDE_MODAL_ADD_COMMENT,
} from '../../../actions/types';
import * as actions from '../../../actions/modalAddComment';

describe('modal actions: show modal', () => {
  it('should show a modal when a cursor hovers on a comment', () => {
    const post = 'Hello blogger!';
    const pathname = 'fitness';
    const expectedAction = {
      type: SHOW_MODAL_ADD_COMMENT,
      post,
      pathname
    };
    expect(actions.showModalAddComment(post, pathname)).toEqual(expectedAction);
  });
});

describe('modal actions: hide modal', () => {
  it('should hide a modal when a cursor off of an element', () => {
    const expectedAction = {
      type: HIDE_MODAL_ADD_COMMENT
    };
    expect(actions.hideModalAddComment()).toEqual(expectedAction);
  });
});
