import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../../../actions/types';
import reducer from '../../../reducers/loader';

describe('loader reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        showLoader: false
      }
    );
  });
});

it('should handle SHOW_LOADER', () => {
  expect(
    reducer([], {
      type: SHOW_LOADER
    })
  ).toEqual(
    {
      showLoader: true
    }
  );
});

it('should handle HIDE_LOADER', () => {
  expect(
    reducer([], {
      type: HIDE_LOADER
    })
  ).toEqual(
    {
      showLoader: false
    }
  );
});
