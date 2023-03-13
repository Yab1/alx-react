import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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

describe('isLoggedIn is true', () => {
  const app = shallow(<App />);
  app.setProps({ isLoggedIn: true });

  it('should verify that the Login component is not included', () => {
    expect(app.exists('Login')).toBe(false);
  });

  it('should verify that the CourseList component is included', () => {
    expect(app.exists('CourseList')).toBe(true);
  });
});
