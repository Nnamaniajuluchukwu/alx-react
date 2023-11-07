import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';


describe('BodySectionWithMarginBottom Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render a BodySection component and pass props correctly', () => {
    const testProps = {
      title: 'Test Title',
      children: <p>test children node</p>,
    };

    const wrapper = shallow(<BodySectionWithMarginBottom {...testProps} />);
    const bodySection = wrapper.find('BodySection');
  
    expect(bodySection.exists()).toBe(true);
    expect(bodySection.props()).toEqual(testProps);
  });
});
