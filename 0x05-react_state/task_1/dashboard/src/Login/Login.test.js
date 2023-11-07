import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Login Component', () => {
  let wrapper;
  beforeAll(() => {
      wrapper = shallow(<Login />);
      StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
      expect(wrapper.exists()).toBeTruthy();
  });

  it('should contains 3 inputs', () => {
      const input = wrapper.find('input');
      expect(input.length).toEqual(3);
  });

  it('should contains 2 labels', () => {
      const label = wrapper.find('label');
      expect(label.length).toEqual(2);
  });
  
  it('should verify that the submit button is disabled by default', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('input').at(2).prop('disabled')).toBeTruthy();
  });
  
  it('should verify that after changing the value of the two inputs, the button is enabled', () => {
    wrapper.find('input').at(0).simulate('change', { target: { email: 'Eyang' } });
    wrapper.find('input').at(1).simulate('change', { target: { password: 'alx-react' } });
    expect(wrapper.find('input').at(2).prop('disabled')).toBeFalsy();
  });

  it('should match the snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
  });
});
