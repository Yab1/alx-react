import React, { PureComponent } from 'react';
import PropsTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propsTypes = {
  __html: PropsTypes.shape({ html: PropsTypes.string }),
  type: PropsTypes.string.isRequired,
  value: PropsTypes.string,
  markAsRead: PropsTypes.func,
  id: PropsTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log('Return Nothing');
  },
  id: 0,
};
export default NotificationItem;
