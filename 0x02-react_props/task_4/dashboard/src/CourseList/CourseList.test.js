import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';


describe('CourseList Component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<CourseList />);
    })

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders the 5 different rows', () => {
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
})
