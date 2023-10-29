import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('NotificationItem Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    
    // Assert that the rendered output contains the expected text
    expect(wrapper.text()).toContain(`test`);
  });

  it('should render with an HTML prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    
    // Assert that the rendered output contains the expected HTML
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('should call the spy with the right ID argument when the button is clicked', () => {
    const type = 'default';
    const value = 'test';
    const markAsReadSpy = jest.fn();

    const wrapper = shallow(<NotificationItem type={type} value={value} markAsRead={() => markAsReadSpy(1)}/>)

    // Find the first list item element and simulate a click
    wrapper.find('li').first().simulate('click');

    // Check if the spy was called with the correct ID argument
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
