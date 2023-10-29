import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Header Component', () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should contain img', () => {
        const wrapper = shallow(<Header />);
        const img = wrapper.find('img');
        expect(img.exists()).toBeTruthy();
    });

    it('should contain heading', () => {
        const wrapper = shallow(<Header />);
        const heading = wrapper.find('h1');
        expect(heading.exists()).toBeTruthy();
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
