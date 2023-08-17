import React, { Suspense } from 'react';
import AuthBar from './AuthBar';
import { NavLink, Outlet } from 'react-router-dom';
import UserBar from './UserBar';

const Layout = ({ isLoggedIn, login, logout }) => {
  console.log('layout');
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/store">Store</NavLink>
          {isLoggedIn ? <NavLink to="/cabinet">Cabinet</NavLink> : null}{' '}
        </nav>{' '}
        <div>
          {!isLoggedIn ? (
            <AuthBar login={login} />
          ) : (
            <UserBar logout={logout} />
          )}
        </div>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
