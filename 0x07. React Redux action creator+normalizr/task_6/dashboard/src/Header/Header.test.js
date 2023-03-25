/**
 * @jest-environment jsdom
 */
import React, { useContext } from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe(Header, () => {
  it('should renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.exists()).toEqual(true);
  });

  it('should renders img and h1 tags', () => {
    const header = shallow(<Header />);
    expect(header.exists('img')).toBe(true);
    expect(header.exists('h1')).toBe(true);
  });
});

describe('0x05. React state', () => {
  it('should tests that logoutSection is not rendered with default context values', () => {
    const context = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logout: jest.fn(),
    };

    const header = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(header.find('#logoutSection').length).toBe(0);
    expect(header.find('#logoutSection').exists()).toBe(false);
    header.unmount();
  });

  it('should tests that logoutSection is rendered with context values', () => {
    const context = {
      user: {
        email: 'test@test.com',
        password: '123',
        isLoggedIn: true,
      },
      logout: jest.fn(),
    };

    const header = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(header.find('#logoutSection').length).toBe(1);
    expect(header.find('#logoutSection').exists()).toBe(true);
    header.unmount();
  });

  it('should verifies that the logOut function is called when clicking on logOut link', () => {
    const context = {
      user: {
        email: 'test@test.com',
        password: '123',
        isLoggedIn: true,
      },
      logout: jest.fn(),
    };

    const spy = jest.spyOn(context, 'logout');

    const header = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    header.find('a').simulate('click');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    header.unmount();
  });
});
