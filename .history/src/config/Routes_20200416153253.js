import Login from "../pages/login";
import Main from "../components/main/main";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Auth from './auth';
import NewsList from './../components/newsList';
export const Routes = (props) => {
  return (
    <div>
      <Switch>
        <ProtectedRoutes path="/" exact component={() => <Main />} />
        <ProtectedRoutes path="/" exact component={() => <NewsList />} />
        <ProtectedRoutes path="/" exact component={() => <Main />} />
        <Route
          exact
          path="/login"
          component={() => <Login />}
        />
      </Switch>
    </div>
  );
};
