export const StatusFilters = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed',
};

const initialState = {
  status: StatusFilters.All,
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER': {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
}
