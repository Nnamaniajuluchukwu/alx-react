import React from 'react';
import { shallow } from 'enzyme';
// import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import AppContext, {user, logOut} from './AppContext';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';


describe('App Component', () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should not display CourseList by default', () => {
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('App Component Dynamic', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should contain Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBeTruthy();
  });

  it('should not contain CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  it('should verify that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    const appInst = wrapper.instance();
    expect(appInst.state.displayDrawer).toBeFalsy();
  });

  it('should verify that after calling handleDisplayDrawer, the state should now be true', () => {
    const wrapper = shallow(<App />);
    const appInst = wrapper.instance();
    appInst.handleDisplayDrawer();
    expect(appInst.state.displayDrawer).toBeTruthy();
  });

  it('should verify that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = shallow(<App />);
    const appInst = wrapper.instance();
    appInst.handleDisplayDrawer();
    appInst.handleHideDrawer();
    expect(appInst.state.displayDrawer).toBeFalsy();
  });
});

describe("when isLogged in is true", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().user).toEqual(user);

  it("checks Login is not rendered", () => {
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("checks CourseList is rendered", () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it.skip(`Tests that the logIn function updates user's state correctly`, () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  it.skip(`Tests that the logOut function updates user's state correctly`, () => {
    const user = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );


    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});
