import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import toJson from 'enzyme-to-json';


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
