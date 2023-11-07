import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';
import AppContext from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Header Component', () => {
    let wrapper;

    const contextValue = {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
    };

    beforeAll(() => {
        wrapper = shallow(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it.skip('should contain img', () => {
        const img = wrapper.find('img');
        expect(img.exists()).toBeTruthy();
    });

    it.skip('should contain heading', () => {
        const heading = wrapper.find('h1');
        expect(heading.exists()).toBeTruthy();
    });

    it('should match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe('Header Class Component', () => {
    it('should not render logoutSection with default context', () => {
        const contextValue = {
            user: {
              email: '',
              password: '',
              isLoggedIn: false
            },
            logOut: () => {}
        };

        const wrapper = shallow(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );

        // checked if logoutSection does not exist in the rendered component
        expect(wrapper.find('#logoutSection')).toHaveLength(0);
    });

    it.skip('should render logoutSection when isLoggedIn is true', () => {
        const contextValue = {
            user: {
              email: 'daniel.eyang.ed@gmail.com',
              password: '',
              isLoggedIn: true
            },
            logOut: () => {}
        };

        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );

        // checked if logoutSection exists in the rendered component
        expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });

    it.skip('should spy the logOut, and verify that clicking on the link is calling the spy', () => {
        const contextValue = {
            user: {
              email: 'daniel.eyang.ed@gmail.com',
              password: '',
              isLoggedIn: true
            },
            logOut: jest.fn()
        };

        const spy = jest.spyOn(contextValue, "logOut");

        const wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Header />
        </AppContext.Provider>
        );

        wrapper.find('a').simulate('click');

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
