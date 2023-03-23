import getAllNotificationsByUser from './notifications';
import notificationData from '../../notifications.json';

describe('Test for Notifications.js', () => {
  test('should return the right data based on userId', () => {
    const userId = '5debd764a7c57c7839d722e9';
    let expectedData = [];
    notificationData
      .filter((notification) => notification.author.id === userId)
      .map((notification) => expectedData.push(notification.context));

    expect(getAllNotificationsByUser(userId)).toEqual(expectedData);
  });
});
