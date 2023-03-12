import React from 'react';
import PropsTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? (
        <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
      ) : null}
    </>
  );
};

NotificationItem.propsTypes = {
  html: PropsTypes.shape({
    __html: PropsTypes.string,
  }),
  type: PropsTypes.string.isRequired,
  value: PropsTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};
export default NotificationItem;
