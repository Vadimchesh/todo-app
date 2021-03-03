import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch } from 'react-redux';
import AddTask from './AddTask';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(() => mockDispatch),
  };
});

describe('Add Task:', () => {
  let wrapper = ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTask />);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('called handleKeyDown fn', () => {
    wrapper
      .find('input')
      .simulate('keydown', { which: 13, target: { value: 'test' } });
    expect(useDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: 'todoAdd',
      payload: 'test',
    });
  });
});
