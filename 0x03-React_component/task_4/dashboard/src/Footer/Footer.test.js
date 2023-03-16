import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe(Footer, () => {
  it('should renders without crashing', () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });

  it('should renders the text "Copyright" at the very least', () => {
    const footer = shallow(<Footer />);
    expect(footer.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});
