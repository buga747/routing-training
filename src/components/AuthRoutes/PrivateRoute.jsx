import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login', // Redirect to the login page when not logged in
  isLoggedIn,
}) => {
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
