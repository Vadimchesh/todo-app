import React from 'react';
import BottomControls from './BottomControls';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import { useDispatch } from 'react-redux';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(() => mockDispatch),
  };
});

describe('BottomControls:', () => {
  let wrapper = ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<BottomControls />);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render all label', () => {
    const label = wrapper.find('label');
    expect(label.length).toBe(3);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<BottomControls />);
    expect(tree).toMatchSnapshot();
  });
});
