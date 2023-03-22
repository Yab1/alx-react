/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

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

  it('should not display the link when the user is logged out', () => {
    const context = {
      user: {
        isLoggedIn: false,
      },
    };
    const footer = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(footer.exists('a')).toBe(false);
  });

  it('should display the link when the user is logged in', () => {
    const context = {
      user: {
        isLoggedIn: true,
      },
    };
    const footer = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(footer.exists('a')).toBe(true);
    expect(footer.find('a').text()).toContain('Contact us');
  });
});
