import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </footer>
  );
};

export default Footer;
