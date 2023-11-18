import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";


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
});
