import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checked, setChecked] = useState(false);
  const headerStyle = { backgroundColor: '#deb5b545' };
  const rowStyle = { backgroundColor: '#f5f5f5ab' };
  const rowTypeStyle = isHeader ? headerStyle : rowStyle;

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <tr
      style={rowTypeStyle}
      className={checked ? css(styles.rowChecked) : null}
    >
      {isHeader ? (
        !textSecondCell ? (
          <th colSpan={2} className={css(styles.th, styles.thColSpan)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={checked ? css(styles.backgroundColor) : null}>
            <input type="checkbox" onClick={handleCheck} />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  th: {
    textAlign: 'start',
    padding: '0.5em 0',
    borderBottom: '1px solid rgb(180, 178, 178)',
  },
  thColSpan: {
    textAlign: 'center',
  },
  td: {
    padding: '.2em',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
