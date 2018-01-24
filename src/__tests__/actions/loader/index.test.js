import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../../../actions/types';
import * as actions from '../../../actions/loader';

describe('loader actions: show', () => {
  it('should show loader', () => {
    const expectedAction = {
      type: SHOW_LOADER
    };
    expect(actions.showLoader()).toEqual(expectedAction);
  });
});

describe('loader actions: hide', () => {
  it('should hide loader', () => {
    const expectedAction = {
      type: HIDE_LOADER
    };
    expect(actions.hideLoader()).toEqual(expectedAction);
  });
});
