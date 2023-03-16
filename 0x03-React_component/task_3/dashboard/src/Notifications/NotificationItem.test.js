import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe(NotificationItem, () => {
  it('should render without a crush', () => {
    const notificationItem = shallow(<NotificationItem />);
    expect(notificationItem).toBeDefined();
  });

  it('should renders correct html from type="default" value="test" props', () => {
    const notificationItem = shallow(<NotificationItem />);
    notificationItem.setProps({ type: 'default', value: 'test' });
    expect(notificationItem.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('should renders correct html from  html="<u>test</u>" props', () => {
    const notificationItem = shallow(<NotificationItem />);
    notificationItem.setProps({ html: '<u>test</u>' });
    expect(notificationItem.html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});

describe('onclick event behaves as it should', () => {
  it('should call console.log', () => {
    const notificationItem = shallow(<NotificationItem />);
    const spy = jest.fn();

    notificationItem
      .setProps({ value: 'test item', markAsRead: spy, id: 1 })
      .find('li')
      .props()
      .onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});
