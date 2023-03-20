import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe(Header, () => {
  it('should renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.exists()).toEqual(true);
  });

  it('should renders img and h1 tags', () => {
    const header = shallow(<Header />);
    expect(header.exists('img')).toBe(true);
    expect(header.exists('h1')).toBe(true);
  });
});
