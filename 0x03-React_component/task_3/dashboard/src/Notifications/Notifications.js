import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationsItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <>
            <div className="Notifications">
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
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  <>
                    <p>Here is the list of notifications</p>
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

export default Notifications;
