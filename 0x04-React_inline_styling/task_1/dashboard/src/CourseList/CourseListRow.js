import React from "react";
import PropTypes from 'prop-types';


export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    const styles = {
        header: {
            backgroundColor: '#deb5b545'
        },
        row: {
            backgroundColor: '#f5f5f5ab'
        }
    }
    return (
        <tr>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th colSpan={2} style={styles.header}>
                            {textFirstCell}
                        </th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td style={styles.row}>
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
