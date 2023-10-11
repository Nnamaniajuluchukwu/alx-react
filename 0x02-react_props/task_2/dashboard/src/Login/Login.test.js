import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';


describe('Login Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should contains 2 inputs', () => {
        const wrapper = shallow(<Login />);
        const input = wrapper.find('input');
        expect(input.length).toEqual(2);
    });

    it('should contains 2 labels', () => {
        const wrapper = shallow(<Login />);
        const label = wrapper.find('label');
        expect(label.length).toEqual(2);
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(<Login />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
