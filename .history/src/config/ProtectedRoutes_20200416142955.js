// React Imports
import React from "react";

// Libraries Imports

import { Route, Redirect } from "react-router-dom";


const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
  <Route
        {...rest}
        render={props =>
          <Authenticated/> === true ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  // state: { from: props.location }
                }}
              />
            )
        }
      />
  );
};
export default ProtectedRoutes;
