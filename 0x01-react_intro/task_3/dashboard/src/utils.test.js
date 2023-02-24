import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('testing functions inside the utils component', () => {
  // a test to check that the function getFullYear() returns the correct year
  it('should return the current year', () => {
    expect(getFullYear()).toBe(2023);
  });

  // a test to check that getFooterCopy() returns the correct string when the argument is true or false
  it('should return the correct string when the argument is true or false', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
  // a test checking the returned string for getLatestNotification
  it('should return the correct string for getLatestNotification', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
