import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
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
          <td className={css(styles.td)}>{textFirstCell}</td>
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
  normal: {
    backgroundColor: '#f5f5f5ab',
  },
  header: {
    backgroundColor: '#deb5b545',
  },
  td: {
    padding: '.2em',
  },
});

export default CourseListRow;
