import ListTask from './ListTask';
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('ListTask:', () => {
  const mockStore = configureStore();

  const StatusFilters = {
    All: 'All',
    Active: 'Active',
    Completed: 'Active',
  };

  const initialState = {
    status: StatusFilters.Test,
  };
  let store = mockStore(initialState);

  it('should take snapshot component', () => {
    const component = shallow(
      <Provider store={store}>
        <ListTask />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
