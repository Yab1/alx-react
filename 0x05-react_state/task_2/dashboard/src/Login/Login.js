import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = ({ logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = () => {
    logIn();
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else if (setEnableSubmit !== false) {
      setEnableSubmit(false);
    }
  }),
    [email, password];
  return (
    <>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form action="#" className={css(styles.AppBody)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <input
          className={css(styles.submit)}
          type="submit"
          onClick={handleLoginSubmit}
          disabled={!enableSubmit}
        />
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
  submit: {
    backgroundColor: 'transparent',
    border: '0.1em solid rgb(180, 178, 178)',
    height: '1.7em',
    width: '5em',
    ':disabled=false': {
      ':hover': {
        borderColor: 'rgb(244, 188, 105)',
      },
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
