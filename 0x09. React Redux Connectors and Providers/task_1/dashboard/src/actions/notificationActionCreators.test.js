import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';
import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('tests for action creators', () => {
  it('should return right action payload and type when markAsAread is called', () => {
    expect(markAsAread(1)).toEqual({
      type: MARK_AS_READ,
      index: 1,
    });
  });
  it('should return right action payload and type when setNotificationFilter is called', () => {
    expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    });
  });
});
