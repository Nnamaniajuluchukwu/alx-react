import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Notifications from './Notifications';


describe('App Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        const header = wrapper.find('.App-header');
        expect(header.exists()).toBeTruthy();
    });

    it('should renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        const body = wrapper.find('.App-body');
        expect(body.exists()).toBeTruthy();
    });

    it('should renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        const footer = wrapper.find('.App-footer');
        expect(footer.exists()).toBeTruthy();
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


describe('Notifications Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('li');
        expect(listItems.length).toEqual(3);
    });

    it("renders the text 'Here is the list of notifications'", () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p');
        expect(text.props().children).toEqual('Here is the list of notifications');
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(<Notifications />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
