import filtersReducer from './reducerFilter';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filtersReducer(undefined, {})).toEqual({
      status: 'All',
    });
  });

  it('should handle FILTER', () => {
    const reducer = filtersReducer([], {
      type: 'FILTER',
      payload: 'Active',
    });
    expect(reducer.status).toBe('Active');
  });
});
