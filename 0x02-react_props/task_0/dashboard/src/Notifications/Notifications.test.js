import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe(Notifications, () => {
  it('should renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it('renders three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li')).toHaveLength(3);
  });

  it('verify that Notifications renders the text Here is the list of notifications', () => {
    const notification = shallow(<Notifications />);
    expect(notification.find('p').text()).toBe(
      'Here is the list of notifications'
    );
  });
});
