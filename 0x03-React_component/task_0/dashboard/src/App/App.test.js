import React from 'react';
import { shallow } from 'enzyme';
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
})
