import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';


describe('CourseList Component', () => {
    let wrapper;
    const testListCourses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
    ];

    beforeAll(() => {
        wrapper = shallow(<CourseList listCourses={[]}/>);
    })

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={testListCourses} />)
    });

    it('renders the 5 different rows', () => {
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
})
