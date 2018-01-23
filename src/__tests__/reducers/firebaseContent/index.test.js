import {
  FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FETCH_DATA_FROM_FIREBASE_ERROR,
  FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS,
  FORCE_FETCH_DATA_FROM_FIREBASE_ERROR,
  APPLY_FILTER_FASHION_TODAYS_POSTS,
  APPLY_FILTER_BEAUTY_TODAYS_POSTS,
  APPLY_FILTER_FITNESS_TODAYS_POSTS,
  APPLY_FILTERS_FASHION_MOSTS_LIKED,
  APPLY_FILTERS_BEAUTY_MOSTS_LIKED,
  APPLY_FILTERS_FITNESS_MOSTS_LIKED,
  APPLY_FILTER_FASHION_SEARCH_BY_HASHTAG,
  APPLY_FILTER_BEAUTY_SEARCH_BY_HASHTAG,
  APPLY_FILTER_FITNESS_SEARCH_BY_HASHTAG,
} from '../../../actions/types';
import reducer from '../../../reducers/firebaseContent';

describe('firebase content reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        fashion: [],
        beauty: [],
        fitness: [],
        error: null
      }
    );
  });
});

it('should handle FETCH_DATA_FROM_FIREBASE_SUCCESS', () => {
  expect(
    reducer([], {
      type: FETCH_DATA_FROM_FIREBASE_SUCCESS,
      response: {
        fashion: [1, 2, 3],
        beauty: [4, 5, 6],
        fitness: [7, 8, 9]
      }
    })
  ).toEqual(
    {
      fashion: [1, 2, 3],
      beauty: [4, 5, 6],
      fitness: [7, 8, 9]
    }
  );
});

it('should handle FETCH_DATA_FROM_FIREBASE_ERROR', () => {
  expect(
    reducer([], {
      type: FETCH_DATA_FROM_FIREBASE_ERROR,
      error: 'Error'
    })
  ).toEqual(
    {
      error: 'Error'
    }
  );
});

it('should handle FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS', () => {
  expect(
    reducer([], {
      type: FORCE_FETCH_DATA_FROM_FIREBASE_SUCCESS,
      response: {
        fashion: [1, 2, 3],
        beauty: [4, 5, 6],
        fitness: [7, 8, 9]
      }
    })
  ).toEqual(
    {
      fashion: [1, 2, 3],
      beauty: [4, 5, 6],
      fitness: [7, 8, 9]
    }
  );
});

it('should handle FORCE_FETCH_DATA_FROM_FIREBASE_ERROR', () => {
  expect(
    reducer([], {
      type: FORCE_FETCH_DATA_FROM_FIREBASE_ERROR,
      error: 'Error'
    })
  ).toEqual(
    {
      error: 'Error'
    }
  );
});

it('should handle APPLY_FILTER_FASHION_TODAYS_POSTS', () => {
  expect(
    reducer([], {
      type: APPLY_FILTER_FASHION_TODAYS_POSTS,
      fashionData: [1, 2, 3]
    })
  ).toEqual(
    {
      fashion: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTER_BEAUTY_TODAYS_POSTS', () => {
  expect(
    reducer([], {
      type: APPLY_FILTER_BEAUTY_TODAYS_POSTS,
      beautyData: [1, 2, 3]
    })
  ).toEqual(
    {
      beauty: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTER_FITNESS_TODAYS_POSTS', () => {
  expect(
    reducer([], {
      type: APPLY_FILTER_FITNESS_TODAYS_POSTS,
      fitnessData: [1, 2, 3]
    })
  ).toEqual(
    {
      fitness: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTERS_FASHION_MOSTS_LIKED', () => {
  expect(
    reducer([], {
      type: APPLY_FILTERS_FASHION_MOSTS_LIKED,
      fashionData: [1, 2, 3]
    })
  ).toEqual(
    {
      fashion: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTERS_BEAUTY_MOSTS_LIKED', () => {
  expect(
    reducer([], {
      type: APPLY_FILTERS_BEAUTY_MOSTS_LIKED,
      beautyData: [1, 2, 3]
    })
  ).toEqual(
    {
      beauty: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTERS_FITNESS_MOSTS_LIKED', () => {
  expect(
    reducer([], {
      type: APPLY_FILTERS_FITNESS_MOSTS_LIKED,
      fitnessData: [1, 2, 3]
    })
  ).toEqual(
    {
      fitness: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTER_FASHION_SEARCH_BY_HASHTAG', () => {
  expect(
    reducer([], {
      type: APPLY_FILTER_FASHION_SEARCH_BY_HASHTAG,
      fashionData: [1, 2, 3]
    })
  ).toEqual(
    {
      fashion: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTER_BEAUTY_SEARCH_BY_HASHTAG', () => {
  expect(
    reducer([], {
      type: APPLY_FILTER_BEAUTY_SEARCH_BY_HASHTAG,
      beautyData: [1, 2, 3]
    })
  ).toEqual(
    {
      beauty: [1, 2, 3]
    }
  );
});

it('should handle APPLY_FILTER_FITNESS_SEARCH_BY_HASHTAG', () => {
  expect(
    reducer([], {
      type: APPLY_FILTER_FITNESS_SEARCH_BY_HASHTAG,
      fitnessData: [1, 2, 3]
    })
  ).toEqual(
    {
      fitness: [1, 2, 3]
    }
  );
});
