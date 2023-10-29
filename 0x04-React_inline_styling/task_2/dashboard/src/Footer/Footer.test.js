import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';


describe('Footer Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBeTruthy();
    });

    describe('Footer Component', () => {
        it('should render the text "Copyright"', () => {
          const wrapper = shallow(<Footer />);
          expect(wrapper.text()).toContain('Copyright');
        });
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
