import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';



describe('App Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
