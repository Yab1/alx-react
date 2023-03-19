import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className={css(styles.AppBody)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input className={css(styles.input)} type="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input className={css(styles.input)} type="password" id="password" />
      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '0.8rem',
    height: '10em',
    margin: '3em',
    marginBottom: '20vh',
  },
  p: {
    marginBottom: '1em',
  },
  button: {
    backgroundColor: 'transparent',
    border: '0.1em solid rgb(180, 178, 178)',
  },
  input: {
    border: '0.1em solid rgb(180, 178, 178)',
    padding: '0.2em',
    margin: '0 0.8em',
  },
});

export default Login;
