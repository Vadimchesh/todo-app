import RemainingTodos from './RemainingTodos';
import React from 'react';
import renderer from 'react-test-renderer';

// const setUp = (props) => shallow(<RemainingTodos {...props} />);
let wrapper;
beforeEach(() => {
  wrapper = shallow(<RemainingTodos />);
});

describe('Remmaining todo coun:', () => {
  it('should render one label', () => {
    const label = wrapper.find('label');
    expect(label.length).toBe(1);
  });
  it('should render count', () => {
    const label = wrapper.find('label');
    expect(label.text()).toBe(`items left`);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<RemainingTodos />);
    expect(tree).toMatchSnapshot();
  });
});
