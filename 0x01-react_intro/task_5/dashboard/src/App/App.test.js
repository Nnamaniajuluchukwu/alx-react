import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';



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
