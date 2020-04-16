import Login from "../pages/login";
import Main from "../components/main/main";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Auth from './auth';

export const Routes = (props) => {
  return (
    <div>
      <Switch>
        <ProtectedRoutes path="/" exact component={() => <Main />} />
        <Route
          exact
          path="/login"
          component={() => <Login handleLoggedIn={Auth.getAuth()} />}
        />
      </Switch>
    </div>
  );
};
