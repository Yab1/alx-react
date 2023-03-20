import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form action="#" className={css(styles.AppBody)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" id="password" />
        </div>
        <button className={css(styles.button)}>OK</button>
      </form>
    </>
  );
};

const styles = StyleSheet.create({
  AppBody: {
    display: 'flex',
    fontSize: '0.8rem',
    marginLeft: '1.2em',
    marginBottom: '15vh',
    '@media(max-width:900px)': {
      flexDirection: 'column',
    },
  },
  p: {
    marginLeft: '0.8em',
  },
  button: {
    backgroundColor: 'transparent',
    border: '0.1em solid rgb(180, 178, 178)',
    height: '1.7em',
    ':hover': {
      borderColor: 'rgb(244, 188, 105)',
    },
    '@media(max-width:900px)': {
      width: '2.6em',
    },
  },
  input: {
    border: '0.1em solid rgb(180, 178, 178)',
    padding: '0.2em',
    margin: '0 0.8em',
    '@media(max-width:900px)': {
      border: 'none',
    },
  },
});

export default Login;
