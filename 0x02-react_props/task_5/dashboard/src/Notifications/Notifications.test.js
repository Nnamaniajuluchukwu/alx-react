import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import toJson from 'enzyme-to-json';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';


describe('Notifications Component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Notifications listNotification={[]}/>);
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
        wrapper = shallow(<Notifications displayDrawer={true} listNotification={[]} />);
    });

    it('should display div.menuItem', () => {
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });

    it('should display div.Notifications', () => {
        expect(wrapper.find('.Notifications').exists()).toBeTruthy() ;
    });
})

describe('Notification with listNotifications', () => {
    const testNotifications = [
        {id: 1, type: 'default', value: 'new course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'default', html: { __html: getLatestNotification() }}
    ]

    it('should render properly if listNotification is not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotification={[]} />);
        expect(wrapper.text()).toContain('No new notification for now');
    });

    it('should render correctly when listNotification is passed with the right length of NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotification={testNotifications} />);
        const listItems = wrapper.find(NotificationItem);
        expect(listItems.length).toEqual(3);
    });
})
