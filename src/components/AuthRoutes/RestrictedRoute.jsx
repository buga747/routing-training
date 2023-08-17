import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/cabinet', // Redirect to the cabinet page when logged in
  isLoggedIn,
}) => {
  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
