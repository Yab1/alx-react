import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe(Login, () => {
  it('should renders without crashing', () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });
  it('should renders 2 input and 2 label tags', () => {
    const login = shallow(<Login />);
    expect(login.find('input').length).toBe(2);
    expect(login.find('label').length).toBe(2);
  });
});
