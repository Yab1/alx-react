import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe(App, () => {
  it('should renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it('should contain the Notifications component', () => {
    const app = shallow(<App />);
    expect(app.exists(Notifications)).toBe(true);
  });

  it('should contain the Header component', () => {
    const app = shallow(<App />);
    expect(app.exists(Header)).toBe(true);
  });

  it('should contain the Login component', () => {
    const app = shallow(<App />);
    expect(app.exists(Login)).toBe(true);
  });

  it('should contain the Footer component', () => {
    const app = shallow(<App />);
    expect(app.exists(Footer)).toBe(true);
  });
});
