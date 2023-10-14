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

    it('should display menuItem when displayDrawer is false', () => {
        expect(wrapper.find('.menuItem').length).toBeTruthy();
    });

    it('should not display div.Notifications when displayDrawer is false', () => {
        expect(wrapper.find('.Notifications').length).toBeFalsy();
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe('Notifcation Component prop true', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
    });

    it('should display div.menuItem', () => {
        expect(wrapper.find('.menuItem').length).toBeTruthy();
    });

    it('should display div.Notifications', () => {
        expect(wrapper.find('.Notifications').length).toBeTruthy() ;
    });

    it('renders three list items', () => {
        const listItems = wrapper.find(NotificationItem);
        expect(listItems.length).toEqual(3);
    });
})