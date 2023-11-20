import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// import fetchMock from "fetch-mock";

const middleWares = [thunk];
const mockStore = configureStore(middleWares);

describe('UI Action Creators', () => {
  it('should return the proper login object', () => {
    const expected = {
      type: 'LOGIN',
      user: {
        email: 'daniel.eyang.ed@gmail.com',
        password: 'alx-react'
      }
    };

    const email = 'daniel.eyang.ed@gmail.com';
    const password = 'alx-react';
    const loggedIn = login(email, password);

    expect(loggedIn).toEqual(expected);
  });

  it('should return the proper logout object', () => {
    const expected = {
      type: 'LOGOUT'
    };

    const loggedOut = logout();

    expect(loggedOut).toEqual(expected);
  });

  it('should return the proper displayNotificationDrawer object', () => {
    const expected = {
      type: 'DISPLAY_NOTIFICATION_DRAWER'
    };

    const display = displayNotificationDrawer();

    expect(display).toEqual(expected);
  });

  it('should return the proper hideNotificationDrawer object', () => {
    const expected = {
      type: 'HIDE_NOTIFICATION_DRAWER'
    };

    const hide = hideNotificationDrawer();

    expect(hide).toEqual(expected);
  });

    // it('should pass LOGIN and LOGIN_SUCCESS to the store if API returns the right response', () => {
  // 	fetchMock.get('http://localhost:8564/login-success.json', {
  // 		first_name: 'Johann',
  // 		last_name: 'Salva',
  // 		email: 'johann.salva@alxafrica.nz',
  // 		profile_picture: 'http://placehold.it/32x32',
  // 	});

  // 	const store = mockStore({});
  // 	const email = 'johann.salva@alxafrica.nz';
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
  // 	const email = 'johann.salva@alxafrica.nz';
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
