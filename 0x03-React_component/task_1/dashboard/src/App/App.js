import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];
  render() {
    const { isLoggedIn, logOut } = this.props;
    onkeydown = onkeyup = function (e) {
      let map = {};
      e = e || event;
      map[e.keyCode] = e.type == 'keydown';
      // 72
      if ((map[17] || map[89]) === false) {
        this.alert('Logging you out');
        logOut();
      }
    };

    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          <hr />
          <>
            {isLoggedIn ? (
              <CourseList listCourses={this.listCourses} />
            ) : (
              <Login />
            )}
          </>
          <hr />
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

export default App;
