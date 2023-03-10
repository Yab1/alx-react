import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
// import NotificationItem from "./NotificationItem";

describe('Notification component tests', () => {
  it('renders Notification component without crashing', () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it('renders ul', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find('ul')).toBeDefined();
  });

  it('should check that the component renders NotificationItem elements', () => {
    const notification = shallow(<Notifications />);
    expect(notification.exists('NotificationItem')).toBe(true);
  });

  it('renders correct text', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find('p').text()).toBe(
      'Here is the list of notifications'
    );
  });
  it('should check NotificationItem element renders the right html', () => {
    const notification = shallow(<Notifications />);
    const notificationItem = notification.find('NotificationItem');
    notificationItem.forEach((li, index) => {
      index === 0 &&
        expect(li.html()).toEqual(
          '<li data-notification-type="default">New course available</li>'
        );
      index === 1 &&
        expect(li.html()).toEqual(
          '<li data-notification-type="urgent">New resume available</li>'
        );
      index === 2 &&
        expect(li.html()).toEqual(
          '<li data-urgent="true"><strong>Urgent requirement</strong> - complete by EOD</li>'
        );
    });
  });
});
