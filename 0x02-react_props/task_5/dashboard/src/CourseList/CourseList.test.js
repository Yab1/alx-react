import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
  const courseList = shallow(<CourseList />);

  it('should renders CourseList component without crashing', () => {
    expect(courseList.exists()).toBe(true);
  });

  it('should check that it renders the 5 different rows', () => {
    expect(courseList.find('CourseListRow')).toHaveLength(5);
  });
});
