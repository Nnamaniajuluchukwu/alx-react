import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe('CourseListRow Component', () => {
    it('renders with textFirstCell only when isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Math' />);
        const tableHead = wrapper.find('th');
        expect(tableHead).toHaveLength(1);
    });
    
    it('renders with textFirst and textSecondCell when isHeader is true, and first th contain colSpan=2', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Math' textSecondCell='101' />);
        const tableHead = wrapper.find('th');
        expect(tableHead.at(0).props().colSpan).toBe(2);
        expect(tableHead).toHaveLength(2);
    });
    
    it('renders two <td> elements with one <tr> element', () => {
        const wrapper = shallow(<CourseListRow textFirstCell='Math' textSecondCell='101'/>);
        const tableRow = wrapper.find('tr');
        const tableDes = wrapper.find('td');
        expect(tableRow).toHaveLength(1);
        expect(tableDes).toHaveLength(2);
    });
    
    it('should confirm the inline style background color for header', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Math' textSecondCell='101' />);

        const headerRow = wrapper.find('th').at(0);

        expect(headerRow.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
    });

    it('should confirm the inline style background color for row', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='Math' textSecondCell='101' />);

        const firstDataCell = wrapper.find('td').at(0);

        expect(firstDataCell.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
    });
})
