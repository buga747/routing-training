import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthBar = ({ login }) => {
  return (
    <div>
      {' '}
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default AuthBar;
