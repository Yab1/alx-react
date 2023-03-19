import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from 'prop-types';

const Footer = ({ style }) => {
  const AppFooter = style._definition;
  return (
    <footer style={AppFooter}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  style: PropTypes.object,
};
Footer.defaultProps = {
  style: { _definition: {} },
};

export default Footer;
