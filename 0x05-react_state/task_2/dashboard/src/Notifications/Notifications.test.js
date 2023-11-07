import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import toJson from 'enzyme-to-json';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Notifications Component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Notifications listNotification={[]}/>);
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it.skip('should display menuItem when displayDrawer is false', () => {
        expect(wrapper.find('.menuItem').length).toBeTruthy();
    });

    it('should not display div.Notifications when displayDrawer is false', () => {
        expect(wrapper.find('.notify').length).toBeFalsy();
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe('Notifications Class Component', () => {
  let wrapper;

  const handleDisplayDrawerMock = jest.fn();
  const handleHideDrawerMock = jest.fn();

  const testNotifications = [
    {id: 1, type: 'default', value: 'new course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'default', html: { __html: getLatestNotification() }}
  ]

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should verify that clicking on the menu item calls handleDisplayDrawer', () => {
    wrapper = shallow(
      <Notifications
        listNotification={testNotifications}
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    )
    wrapper.find('p').at(0).simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('should verify that clicking on the button calls handleHideDrawer', () => {
    wrapper = shallow(
      <Notifications
        listNotification={testNotifications}
        displayDrawer={true}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
      />
    )
    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});

describe('Notification with listNotifications', () => {
    const testNotifications = [
        {id: 1, type: 'default', value: 'new course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'default', html: { __html: getLatestNotification() }}
    ]

    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should render properly if listNotification is not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotification={[]} />);
        expect(wrapper.text()).toContain('No new notification for now');
    });

    it('should render correctly when listNotification is passed with the right length of NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotification={testNotifications} />);
        const listItems = wrapper.find(NotificationItem);
        expect(listItems.length).toEqual(3);
    });

    it('should call console.log with the right message when markAsRead is called', () => {

        const consoleLogSpy = jest.spyOn(console, 'log');
  
        const wrapper = shallow(<Notifications displayDrawer={true} listNotification={testNotifications} />);
    
        // Call the markAsRead method on the component instance
        wrapper.instance().markAsRead(1);
  
        expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  
        consoleLogSpy.mockRestore();
    });

    it('should not rerender with the same list', () => {
        const sampleDisplayDrawer = false;
        const listNotification = [
          { id: 1, type: 'default', value: 'Notification 1' },
          { id: 2, type: 'urgent', value: 'Notification 2' },
        ];
        const wrapper = shallow(<Notifications displayDrawer={sampleDisplayDrawer} listNotification={listNotification} />);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({
          displayDrawer: sampleDisplayDrawer,
          listNotification: listNotification,
        }); // Call shouldComponentUpdate
        expect(shouldUpdate).toBe(false);
      });

    it('should rerender with a longer list', () => {
        const initialList = [
          { id: 1, type: 'default', value: 'Notification 1' },
        ];
        const updatedList = [
          { id: 1, type: 'default', value: 'Notification 1' },
          { id: 2, type: 'urgent', value: 'Notification 2' },
        ];
        const wrapper = shallow(<Notifications listNotification={initialList} />);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotification: updatedList }); // Call shouldComponentUpdate
        expect(shouldUpdate).toBe(true);
      });
})
