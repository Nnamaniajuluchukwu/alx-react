import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from 'prop-types';
import './CourseList.css'


export default function CourseList({ listCourses }) {
    let courseContainer;
    if (listCourses.length === 0) {
        courseContainer = 'No course available';
    } else {
        courseContainer = listCourses.map(course => {
            return <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
        });
    }

    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {courseContainer}
            </tbody>
        </table>
    );
}

CourseList.defaultProps = {
    listCourses: []
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}
