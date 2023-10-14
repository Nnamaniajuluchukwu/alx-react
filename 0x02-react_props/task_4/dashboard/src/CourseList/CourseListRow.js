import React from "react";

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    return (
        <tr>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th colSpan={2}>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}
