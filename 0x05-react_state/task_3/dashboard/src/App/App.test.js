/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from './AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe(App, () => {
  const app = shallow(<App />);
  it('should renders without crashing', () => {
    expect(app).toBeDefined();
  });
  it('should contain the Notifications component', () => {
    expect(app.exists(Notifications)).toBe(true);
  });

  it('should contain the Header component', () => {
    expect(app.exists(Header)).toBe(true);
  });

  it('should contain the Login component', () => {
    expect(app.exists(Login)).toBe(true);
  });

  it('should contain the Footer component', () => {
    expect(app.exists(Footer)).toBe(true);
  });

  it('check that CourseList is not displayed', () => {
    expect(app.exists('courseList')).toBe(false);
  });
});

// describe('isLoggedIn is true', () => {
//   const app = shallow(<App />);
//   app.setProps({ isLoggedIn: true });

//   it('should verify that the Login component is not included', () => {
//     expect(app.exists('Login')).toBe(false);
//   });

//   it('should verify that the CourseList component is included', () => {
//     expect(app.exists('CourseList')).toBe(true);
//   });
// });

describe('When ctrl + h is pressed', () => {
  // it('should pass the logOut function as a prop', () => {
  //   const logOutMock = jest.fn();
  //   const app = mount(<App />);
  //   app.setProps({ logOut: logOutMock });
  //   const event = new KeyboardEvent('keypress', { ctrlKey: true, key: 'h' });
  //   document.dispatchEvent(event);

  //   expect(logOutMock).toHaveBeenCalled();
  //   app.unmount();
  // });

  window.alert = jest.fn();
  it('should check the alert function is called with the string Logging you out', () => {
    window.alert.mockClear();
    const app = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keypress', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('Logging you out');
    spy.mockRestore();
    app.unmount();
  });
});

describe('0x05. React state', () => {
  const app = shallow(<App />);
  it('should verify that the default state for displayDrawer false', () => {
    expect(app.state().displayDrawer).toEqual(false);
  });

  it('should change displayDrawer to true when handleDisplayDrawer is called', () => {
    expect(app.state().displayDrawer).toEqual(false);

    const instance = app.instance();
    instance.handleDisplayDrawer();

    expect(app.state().displayDrawer).toEqual(true);
  });

  it('should change displayDrawer to false when handleHideDrawer is called', () => {
    expect(app.state().displayDrawer).toBe(true);

    const instance = app.instance();
    instance.handleHideDrawer();

    expect(app.state().displayDrawer).toBe(false);
  });

  it('should verify that markNotificationAsRead works as intended, deletes the notification with the passed id from the listNotifications array', () => {
    const context = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, html: { __html: jest.fn() }, type: 'urgent' },
      ],
    };

    const app = mount(
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    );

    const instance = app.instance();

    instance.markNotificationAsRead(3);

    expect(app.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ]);

    expect(app.state().listNotifications.length).toBe(2);
    expect(app.state().listNotifications[3]).toBe(undefined);

    app.unmount();
  });
});
