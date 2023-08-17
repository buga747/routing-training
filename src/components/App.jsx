import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import { Suspense, useState } from 'react';
import Layout from './Layout';
import Store from '../pages/Store';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cabinet from '../pages/Cabinet';
import { RestrictedRoute } from './AuthRoutes/RestrictedRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout isLoggedIn={isLoggedIn} login={login} logout={logout} />
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/cabinet"
                component={<Register />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/cabinet"
                component={<Login />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          {/* Use PrivateRoute for the /cabinet route */}

          <Route
            path="/cabinet"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Cabinet />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
