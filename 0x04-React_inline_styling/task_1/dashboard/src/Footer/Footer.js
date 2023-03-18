import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => {
  return (
    <footer className={css(styles.AppFooter)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </footer>
  );
};

const styles = StyleSheet.create({
  AppFooter: {
    fontSize: '0.8rem',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '1em',
  },
});

export default Footer;
