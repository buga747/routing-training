import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {
  const location = useLocation();

  // Це для перемикання між приватним та публічним
  const userAccessToken = false;

  return !userAccessToken ? (
    <Outlet />
  ) : (
    <Navigate to={location?.state?.from ?? `/`} replace />
  );
};

export default PublicRoute;
