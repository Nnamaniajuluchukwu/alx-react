import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from 'prop-types';
import './CourseList.css'
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  courses: {
    width: '90%',
    margin: 'auto',
    marginTop: '70px',
    border: '1px solid gray',
    borderCollapse: 'collapse',
  }
});

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
        <table className={css(styles.courses)}>
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
