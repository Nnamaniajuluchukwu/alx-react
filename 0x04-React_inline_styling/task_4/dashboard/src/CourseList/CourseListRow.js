import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#deb5b545'
        },
        row: {
            backgroundColor: '#f5f5f5ab'
        },
        th: {
            borderTop: '1px solid gray',
            borderBottom: '1px solid gray',
            ':nth-child(2)': {
                textAlign: 'left',
            },
        },
        td: {
            textAlign: 'left'
        }
    });

    const tableHeadRow = css(
        isHeader ? styles.th : styles.td
    )

    return (
        <tr className={tableHeadRow}>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th className={css(styles.header)} colSpan={2}>
                            {textFirstCell}
                        </th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td className={css(styles.row)}>
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
