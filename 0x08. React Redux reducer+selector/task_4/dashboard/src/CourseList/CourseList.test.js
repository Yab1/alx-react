import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList component', () => {
  const courseList = shallow(<CourseList />);

  it('should renders CourseList component without crashing', () => {
    expect(courseList.exists()).toBe(true);
  });

  it('should check that it renders the 5 different rows', () => {
    courseList.setProps({ listCourses: listCourses });
    expect(courseList.find('CourseListRow')).toHaveLength(5);
  });

  it('should renders correctly when passed a list of courses', () => {
    courseList.setProps({ listCourses: listCourses, isHeader: true });
    expect(courseList.find('thead').children()).toHaveLength(2);
    expect(courseList.find('tbody').children()).toHaveLength(3);
    expect(courseList.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color:#f5f5f5ab"><td><input type="checkbox"/>ES6</td><td class="td_u5zuyk">60</td></tr>'
    );
    expect(courseList.find('tbody').childAt(1).html()).toEqual(
      '<tr style="background-color:#f5f5f5ab"><td><input type="checkbox"/>Webpack</td><td class="td_u5zuyk">20</td></tr>'
    );
    expect(courseList.find('tbody').childAt(2).html()).toEqual(
      '<tr style="background-color:#f5f5f5ab"><td><input type="checkbox"/>React</td><td class="td_u5zuyk">40</td></tr>'
    );
  });
});
