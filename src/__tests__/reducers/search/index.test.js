import {
  SHOW_MODAL_SEARCH,
  HIDE_MODAL_SEARCH,
} from '../../../actions/types';
import reducer from '../../../reducers/modalSearch';

describe('modal search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        showModalSearch: false
      }
    );
  });
});

it('should handle SHOW_MODAL_SEARCH', () => {
  expect(
    reducer([], {
      type: SHOW_MODAL_SEARCH
    })
  ).toEqual(
    {
      showModalSearch: true
    }
  );
});

it('should handle HIDE_MODAL_SEARCH', () => {
  expect(
    reducer([], {
      type: HIDE_MODAL_SEARCH
    })
  ).toEqual(
    {
      showModalSearch: false
    }
  );
});
