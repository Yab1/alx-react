import React from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const logOut = () => {
  user.isLoggedIn = false;
};

const AppContext = React.createContext({ user, logOut });

export default { user, logOut, AppContext };
