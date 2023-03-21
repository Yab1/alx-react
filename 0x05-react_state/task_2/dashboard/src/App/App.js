import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: this.user,
      logOut: this.logOut,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

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

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className={css(styles.body)}>
        <Notifications
          key={this.state.displayDrawer}
          listNotifications={this.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.App)}>
          <Header />
          <hr className={css(styles.Horizontal)} />
          <>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom>
                <Login />
              </BodySectionWithMarginBottom>
            )}
          </>
          <hr className={css(styles.Horizontal)} />
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quos cum neque est rem ab?
            </p>
          </BodySection>
          <Footer style={styles.AppFooter} />
        </div>
      </div>
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

const styles = StyleSheet.create({
  body: {
    padding: '1em',
    fontFamily: 'Source Serif Pro serif',
    fontWeight: '400',
  },
  App: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
  },
  Horizontal: {
    height: '0.1em',
    width: '99%',
    backgroundColor: 'rgb(225, 52, 75)',
    border: 'none',
  },
  AppFooter: {
    fontSize: '0.8rem',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '1em',
  },
});

export default App;
