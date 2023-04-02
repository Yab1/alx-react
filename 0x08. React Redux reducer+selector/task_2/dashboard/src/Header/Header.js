import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const Header = () => {
  const { user, logout } = useContext(AppContext);
  return (
    <>
      <header className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome <strong>{user.email} </strong>
          <em>
            <a href="#" onClick={logout}>
              (logout)
            </a>
          </em>
        </section>
      )}
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
  greeting: {
    marginTop: '1rem',
  },
});
export default Header;
