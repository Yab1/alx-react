import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow When isHeader is true', () => {
  const courseListRow = shallow(<CourseListRow textFirstCell="test" />);
  it('should renders one cell with "colspan = 2 " when textSecondCell does not exist', () => {
    courseListRow.setProps({
      isHeader: true,
    });
    expect(courseListRow.children()).toHaveLength(1);
    expect(courseListRow.exists('[colSpan=2]')).toBe(true);
  });

  it('should renders two cells when textSecondCell is present', () => {
    courseListRow.setProps({
      isHeader: true,
      textSecondCell: 'test',
    });
    expect(courseListRow.children('th')).toHaveLength(2);
  });
});

describe('CourseListRow When isHeader is false', () => {
  const courseListRow = shallow(<CourseListRow textFirstCell="test" />);
  it('should renders two "td" elements within a "tr" element', () => {
    courseListRow.setProps({
      isHeader: false,
    });
    expect(courseListRow.find('td').at(0).parent().is('tr')).toBe(true);
    expect(courseListRow.children('td')).toHaveLength(2);
  });
});
