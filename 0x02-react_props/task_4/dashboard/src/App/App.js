import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes, { bool } from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
        <>{isLoggedIn ? <CourseList /> : <Login />}</>
        <hr />
        <Footer />
      </div>
    </>
  );
}

App.propType = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
