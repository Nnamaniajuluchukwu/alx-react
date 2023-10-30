import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';


describe('BodySection Component', () => {
  it('should render the children correctly and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    const headingH2 = wrapper.find('h2');
    const paragraph = wrapper.find('p');

    expect(headingH2.length).toBe(1)
    expect(headingH2.text()).toContain('test title');
    expect(paragraph.length).toBe(1)
    expect(paragraph.text()).toContain('test children node');
  })
})
