import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';
import AppContext from '../App/AppContext';


describe.skip('Footer Component', () => {
    let wrapper;

    const contextValue = {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
    };

    beforeEach(()=>{
        wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Footer />
            </AppContext.Provider>
        );
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    describe('Footer Component', () => {
        it('should render the text "Copyright"', () => {
          expect(wrapper.text()).toContain('Copyright');
        });
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
