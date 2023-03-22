import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationsItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        <div onClick={handleDisplayDrawer} className={css(styles.menuItem)}>
          Your notifications
        </div>
        {displayDrawer ? (
          <>
            <div className={css(styles.Notifications)}>
              <button
                style={{
                  color: '#3a3a3a',
                  fontWeight: 'bold',
                  background: 'none',
                  border: 'none',
                  fontSize: '15px',
                  position: 'absolute',
                  right: '2px',
                  top: '2px',
                  cursor: 'pointer',
                }}
                aria-label="Close"
                onClick={handleHideDrawer}
              >
                <img src={closeIcon} alt="closeIcon" width="10px" />
              </button>
              {listNotifications.length !== 0 ? (
                <p>Here is the list of notifications</p>
              ) : null}
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  <>
                    {listNotifications.map(({ id, html, type, value }) => (
                      <NotificationsItem
                        key={id}
                        type={type}
                        value={value}
                        html={html}
                        markAsRead={this.markAsRead}
                      />
                    ))}
                  </>
                ) : (
                  <NotificationsItem
                    value="No new notification for now"
                    markAsRead={this.markAsRead}
                  />
                )}
              </ul>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const opacityAnim = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceAnim = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)' },
  '66%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

const styles = StyleSheet.create({
  Notifications: {
    backgroundColor: 'white',
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '40px',
    right: '1.9em',
    width: '30vw',
    zIndex: '10',
    '@media(max-width:900px)': {
      inset: '0em',
      width: '99.5vw',
      fontSize: '20px',
      padding: '0px',
      ':nth-child(1n)>:last-child': {
        padding: '0px',
        listStyleType: 'none',
      },
      ':nth-child(1n)>:last-child > li': {
        borderBottom: '0.1em solid black',
        padding: '10px 8px',
      },
    },
  },
  menuItem: {
    fontSize: '0.8rem',
    textAlign: 'end',
    paddingRight: '1.2em',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnim, bounceAnim],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
});

export default Notifications;
