import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


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

    it('should contain the Login component', () => {
      expect(wrapper.find(Login).length).toBe(1);
    });

    it('should contain the Footer component', () => {
      expect(wrapper.find(Footer).length).toBe(1);
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
