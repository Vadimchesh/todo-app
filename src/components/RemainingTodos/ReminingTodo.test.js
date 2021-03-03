import RemainingTodos from './RemainingTodos';
import React from 'react';
import { shallow } from 'enzyme';

describe('Title component', () => {
  it('should render RemainingTodos component with props', () => {
    const component = shallow(<RemainingTodos count='1' />);
    expect(component).toMatchSnapshot();
  });

  it('should render RemainingTodos component without props', () => {
    const component = shallow(<RemainingTodos />);
    expect(component).toMatchSnapshot();
  });
});
