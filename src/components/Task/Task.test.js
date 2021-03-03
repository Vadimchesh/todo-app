import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useDispatch } from 'react-redux';
import Task from './Task';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(() => mockDispatch),
  };
});

describe('Task:', () => {
  let wrapper = ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Task />);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('called toggle fn', () => {
    wrapper.find('.toggle').simulate('change');
    expect(mockDispatch).toBeCalled();
  });

  it('called onDelete fn', () => {
    wrapper.find('#delete').simulate('click');
    expect(mockDispatch).toBeCalled();
  });
});
