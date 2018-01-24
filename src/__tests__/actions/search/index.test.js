import {
  SHOW_MODAL_SEARCH,
  HIDE_MODAL_SEARCH,
} from '../../../actions/types';
import * as actions from '../../../actions/modalSearch';

describe('search actions: show', () => {
  it('should show search', () => {
    const expectedAction = {
      type: SHOW_MODAL_SEARCH
    };
    expect(actions.showModalSearch()).toEqual(expectedAction);
  });
});

describe('search actions: hide', () => {
  it('should hide search', () => {
    const expectedAction = {
      type: HIDE_MODAL_SEARCH
    };
    expect(actions.hideModalSearch()).toEqual(expectedAction);
  });
});
