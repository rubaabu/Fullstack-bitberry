import Login from "../pages/login";
import Main from "../components/main/main";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

export const Routes = (props) => {
  return (
    <div>
      <Switch>
        <ProtectedRoutes path="/" exact component={() => <Main loggedIn={this.state.loggedIn}/>} />
        <Route
          exact
          path="/login"
          component={() => <Login handleLoggedIn={props.handleLoggedIn} />}
        />
      </Switch>
    </div>
  );
};
