import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('App Component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<App />);
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
  it('should not contain Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toBe(false);
  });
      
  it('should contain CourseList when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('should contain Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBeTruthy();
  });

  it('should not contain CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });
});

describe('App Class Component', () => {
  it('should call logOut and display an alert when Ctrl+h is pressed', () => {
    // Mock the logOut function
    const logOut = jest.fn();

    // Create a wrapper for the App component and added the default logOut function as prop
    const wrapper = mount(<App logOut={logOut} />);

    // Create a mock KeyboardEvent for Ctrl+h
    const ctrlHEvent = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    // Trigger the event on the window
    window.dispatchEvent(ctrlHEvent);

    // Ensure that logOut was called
    expect(logOut).toHaveBeenCalled();

    // Ensure that the alert function was called with the specified string
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(wrapper.exists()).toBe(true);
  });
});
