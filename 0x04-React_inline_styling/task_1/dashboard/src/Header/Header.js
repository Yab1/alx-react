import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <>
      <header className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </>
  );
};

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    color: 'rgb(225, 52, 75);',
    alignItems: 'center',
    gap: '1em',
  },
  AppLogo: {
    width: '20%',
    aspectRatio: '1/1',
  },
});
export default Header;
