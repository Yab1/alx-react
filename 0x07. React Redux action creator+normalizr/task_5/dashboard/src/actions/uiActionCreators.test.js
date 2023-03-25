import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('tests for action creators', () => {
  it('should return right action payload and type when login is called', () => {
    const email = 'someone@gmail.com';
    const password = 'password';
    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: 'someone@gmail.com', password: 'password' },
    });
  });
  it('should return right action payload and type when logout is called', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });
  it('should return right action payload and type when displayNotificationDrawer is called', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });
  it('should return right action payload and type when hideNotificationDrawer is called', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
