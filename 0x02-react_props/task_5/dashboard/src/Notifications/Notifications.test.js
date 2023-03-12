import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';

describe('Notification component tests', () => {
  const notification = shallow(<Notifications />);

  it('renders Notification component without crashing', () => {
    expect(notification).toBeDefined();
  });

  it('renders ul', () => {
    expect(notification.find('ul')).toBeDefined();
  });

  it('should check that the component renders NotificationItem elements', () => {
    expect(
      notification.setProps({ displayDrawer: true }).exists('NotificationItem')
    ).toBe(true);
  });

  it('renders correct text', () => {
    expect(
      notification.setProps({ displayDrawer: true }).find('p').text()
    ).toBe('Here is the list of notifications');
  });

  it('should check NotificationItem element renders the right html', () => {
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

  it('should display the  menuItem div when displayDrawer is false', () => {
    expect(
      notification.setProps({ displayDrawer: false }).exists('.menuItem')
    ).toBe(true);
  });

  it('should display the  menuItem div when displayDrawer is true', () => {
    expect(
      notification.setProps({ displayDrawer: true }).exists('.menuItem')
    ).toBe(true);
  });
  it('should display the div.Notifications when displayDrawer is true', () => {
    expect(
      notification.setProps({ displayDrawer: true }).exists('.Notifications')
    ).toBe(true);
  });
});
