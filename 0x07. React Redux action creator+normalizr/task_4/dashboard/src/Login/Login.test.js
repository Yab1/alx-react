import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe(Login, () => {
  it('should renders without crashing', () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });
  it('should renders 2 input and 2 label tags', () => {
    const login = shallow(<Login />);
    expect(login.find('.input_1h1jh0o').length).toBe(2);
    expect(login.find('label').length).toBe(2);
  });
});

describe('test for submit input on form', () => {
  const login = shallow(<Login />);
  it('should verify that the submit button is disabled by default', () => {
    expect(login.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it('should verify that after changing the value of the two inputs, the button is enabled', () => {
    login
      .find('#email')
      .simulate('change', { target: { value: 'someone@gmail.com' } });
    login
      .find('#password')
      .simulate('change', { target: { value: 'password' } });
    expect(login.find("input[type='submit']").props().disabled).toEqual(true);
  });
});
