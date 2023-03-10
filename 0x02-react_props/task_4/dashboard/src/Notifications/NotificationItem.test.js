import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe(NotificationItem, () => {
  it('should render without a crush', () => {
    const notificationItem = shallow(<NotificationItem />);
    expect(notificationItem).toBeDefined();
  });

  it('should renders the correct html for a dummy props ', () => {
    const notificationItem = shallow(<NotificationItem />);
    notificationItem.setProps({ type: 'default', value: 'test' });
    expect(notificationItem.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('should render the correct html for a dummy prop', () => {
    const notificationItem = shallow(<NotificationItem />);
    notificationItem.setProps({ html: '<u>test</u>' });
    expect(notificationItem.html()).toEqual(
      '<li data-urgent="true"><u>test</u></li>'
    );
  });
});
