import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('tests for action creators', () => {
  it('should return right action payload and type when login is called', () => {
    const email = 'someone@gmail.com';
    const password = 'password';
    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: 'someone@gmail.com', password: 'password' },
    });
  });
  it('should return right action payload and type when logout is called', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });
  it('should return right action payload and type when displayNotificationDrawer is called', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });
  it('should return right action payload and type when hideNotificationDrawer is called', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });

  // it('should pass LOGIN and LOGIN_SUCCESS to the store if API returns the right response', () => {
  // 	fetchMock.get('http://localhost:8564/login-success.json', {
  // 		first_name: 'Yeabsera',
  // 		last_name: 'Lisanework',
  // 		email: 'yeabsera.lisanework@alxafrica.nz',
  // 		profile_picture: 'http://placehold.it/32x32',
  // 	});

  // 	const store = mockStore({});
  // 	const email = 'yeabsera.lisanework@alxafrica.nz';
  // 	const password = 'password';

  // 	return store.dispatch(
  // 		loginRequest(email, password).then(() => {
  // 			const actions = store.getActions();
  // 			console.log(actions);
  // 			expect(actions[0]).toEqual(loginSuccess());
  // 			expect(actions[1]).toEqual(login());
  // 		})
  // 	);
  // 	fetchMock.restore();
  // });

  // it('should pass LOGIN and LOGIN_FAILURE if API query fails', () => {
  // 	fetchMock.get('http://localhost:8564/login-success.json', 400);

  // 	const store = mockStore({});
  // 	const email = 'yeabsera.lisanework@alxafrica.nz';
  // 	const password = 'password';

  // 	return store.dispatch(
  // 		loginRequest(email, password).then(() => {
  // 			const actions = store.getActions();
  // 			console.log(actions);
  // 			expect(actions[0]).toEqual(loginFailure());
  // 			expect(actions[1]).toEqual(login());
  // 		})
  // 	);

  // 	fetchMock.restore();
  // });
});
