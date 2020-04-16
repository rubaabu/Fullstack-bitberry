// React Imports
import React from "react";

// Libraries Imports

import { Route, Redirect } from "react-router-dom";
import Auth from './auth';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.authenticate() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoutes;
