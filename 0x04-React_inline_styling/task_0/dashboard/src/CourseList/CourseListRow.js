import React from "react";
import PropTypes from 'prop-types';


export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    return (
        <tr>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th colSpan={2} style={{
                            backgroundColor: '#deb5b545'
                        }}>
                            {textFirstCell}
                        </th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td style={{
                        backgroundColor: '#f5f5f5ab'
                    }}>
                        {textFirstCell}
                    </td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
