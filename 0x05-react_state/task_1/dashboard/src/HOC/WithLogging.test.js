import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import BodySection from '../BodySection/BodySection';

describe('WithLogging HOC', () => {
  it.skip('should log on mount and unmount with "BodySection"', () => {
    const consoleLog = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(() => <BodySection />);
    const wrapper = mount(<WrappedComponent />);  // Enzyme issues: Please if you have a fix, create a pull request
    wrapper.unmount();
    expect(consoleLog).toHaveBeenCalledWith('Component BodySection is mounted on componentDidMount()');
    expect(consoleLog).toHaveBeenCalledWith('Component BodySection is going to unmount on componentWillUnmount()');
    consoleLog.mockRestore();
  });
});
