import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils.js';

function Notification() {
  function handleClick() {
    console.log('Close button has been clicked');
  }
  return (
    <div className="Notification">
      <button
        aria-label="Close"
        style={{
          backgroundColor: 'white',
          border: 'none',
          alignSelf: 'flex-end',
        }}
        onClick={handleClick}
      >
        <img src={closeIcon} alt="" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notification;
