import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import toJson from 'enzyme-to-json';
import NotificationItem from './NotificationItem';


describe('Notifications Component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Notifications />);
    })

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders three list items', () => {
        const listItems = wrapper.find(NotificationItem);
        expect(listItems.length).toEqual(3);
    });

    it("renders the text 'Here is the list of notifications'", () => {
        const text = wrapper.find('p');
        expect(text.props().children).toEqual('Here is the list of notifications');
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
