import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  return (
    <>
      <table className={css(styles.Table)} id="CourseList">
        <thead className={css(styles.Tr, styles.Th, styles.ThColSpan)}>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourses.length > 0 ? (
            listCourses.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
                className={css(styles.CourseListRow)}
              />
            ))
          ) : (
            <CourseListRow textFirstCell="No course available yet" />
          )}
        </tbody>
      </table>
    </>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  Table: {
    width: '94%',
    margin: '3% 3% 20vh 3%',
    border: '1px solid rgb(180, 178, 178)',
    borderCollapse: 'collapse',
  },
  Tr: {
    border: '1px solid rgb(180, 178, 178)',
  },
  CourseListRow: {
    border: 'none',
  },
  Th: {
    textAlign: 'start',
    padding: '0.5em 0',
  },
  ThColSpan: {
    textAlign: 'center',
  },
});

export default CourseList;
