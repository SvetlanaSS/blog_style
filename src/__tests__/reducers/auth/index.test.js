import {
  AUTH_STARTED,
  AUTH_ERROR,
  USER_AUTHORIZED,
  USER_LOGGED_OUT,
} from '../../../actions/types';
import reducer from '../../../reducers/auth';

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        authenticated: false,
        message: null
      }
    );
  });
});

it('should handle AUTH_STARTED', () => {
  expect(
    reducer([], {
      type: AUTH_STARTED
    })
  ).toEqual(
    {
      authenticated: false
    }
  );
});

it('should handle USER_AUTHORIZED', () => {
  expect(
    reducer([], {
      type: USER_AUTHORIZED
    })
  ).toEqual(
    {
      authenticated: true
    }
  );
});

it('should handle USER_LOGGED_OUT', () => {
  expect(
    reducer([], {
      type: USER_LOGGED_OUT
    })
  ).toEqual(
    {
      authenticated: false
    }
  );
});

it('should handle AUTH_ERROR', () => {
  expect(
    reducer([], {
      type: AUTH_ERROR,
      message: 'Error'
    })
  ).toEqual(
    {
      authenticated: false,
      message: 'Error'
    }
  );
});
