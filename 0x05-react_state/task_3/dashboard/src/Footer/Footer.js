import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from 'prop-types';
import { AppContext } from '../App/AppContext';

const Footer = ({ style }) => {
  // const AppFooter = style._definition;
  const { user } = useContext(AppContext);
  return (
    <footer style={style._definition}>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
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
