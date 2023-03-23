import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notification component tests', () => {
  const notification = shallow(<Notifications />);

  it('renders Notification component without crashing', () => {
    expect(notification).toBeDefined();
  });

  it('renders ul', () => {
    expect(notification.find('ul')).toBeDefined();
  });

  // it('should check that the component renders NotificationItem elements', () => {
  //   expect(
  //     notification.setProps({ displayDrawer: true }).exists('NotificationItem')
  //   ).toBe(true);
  // });

  it('should check NotificationItem element renders the right html', () => {
    const notificationItem = notification
      .setProps({ displayDrawer: true, listNotifications: listNotifications })
      .find('NotificationItem');
    notificationItem.forEach((li, index) => {
      index === 0 &&
        expect(li.html()).toEqual(
          '<li class="default_1tsdo2i" data-notification-type="default">New course available</li>'
        );
      index === 1 &&
        expect(li.html()).toEqual(
          '<li class="urgent_137u7ef" data-notification-type="urgent">New resume available</li>'
        );
      index === 2 &&
        expect(li.html()).toEqual(
          '<li class="urgent_137u7ef" data-notification-type="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>'
        );
    });
  });

  it('should display the  menuItem div when displayDrawer is false', () => {
    expect(
      notification
        .setProps({ displayDrawer: false })
        .exists('.menuItem_1vx6roq')
    ).toBe(true);
  });
  it('should not display the div.Notifications when displayDrawer is false', () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(
      notification.setProps({ displayDrawer: false }).exists('.Notifications')
    ).toBe(false);
  });
  it('should display the  menuItem div when displayDrawer is true', () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(
      notification.setProps({ displayDrawer: true }).exists('.menuItem_1vx6roq')
    ).toBe(true);
  });
  it('should display the div.Notifications when displayDrawer is true', () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.exists('.Notifications_vuoyd')).toBe(true);
  });

  it('should render correctly when listNotifications passes an empty array is passed', () => {
    const notification = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(
      notification.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  it('should render correctly when listNotifications passes an array is passed', () => {
    const notification = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(notification.find('NotificationItem')).toHaveLength(3);
  });

  it('should display "No new notification for now" when listNotifications is empty but "Here is the list of notifications" should not be displayed ', () => {
    notification.setProps({ listNotifications: [], dispatchEvent: true });
    expect(
      notification.containsMatchingElement(
        <p>Here is the list of notifications</p>
      )
    ).toBe(false);
    expect(
      notification.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  // it('should not re-render when the list passed as prop is the same', () => {
  //   const notification = shallow(
  //     <Notifications
  //       displayDrawer={true}
  //       listNotifications={listNotifications}
  //     />
  //   );

  //   expect(
  //     notification.instance().shouldComponentUpdate(listNotifications)
  //   ).toBe(false);
  // });

  // it('should re-renders if listNotifications if listNotifications is changed', () => {
  //   const newListNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' },
  //     { id: 3, type: 'default', html: getLatestNotification() },
  //     { id: 4, type: 'default', value: 'Foo' },
  //   ];

  //   const notification = shallow(
  //     <Notifications
  //       displayDrawer={true}
  //       listNotifications={listNotifications}
  //     />
  //   );

  //   expect(
  //     notification.instance().shouldComponentUpdate(newListNotifications)
  //   ).toBe(true);
  // });
});

describe('onclick event behaves as it should', () => {
  const notification = shallow(<Notifications />);
  it('should call console.log', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();

    notification.instance().markAsRead = spy;
    notification.instance().markAsRead(1);
    expect(notification.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});

describe('0x05. React state', () => {
  it('should verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const notification = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    notification.find('div').at(0).simulate('click');

    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it('should verify that clicking on the button calls handleHideDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const notification = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    notification.find('button').at(0).simulate('click');

    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});