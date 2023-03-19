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
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
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
                onClick={console.log('Close button has been clicked')}
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
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '40px',
    right: '1.9em',
    width: '30vw',
    zIndex: '10',
  },
  menuItem: {
    fontSize: '0.8rem',
    textAlign: 'end',
    paddingRight: '1.2em',
  },
});

export default Notifications;
