import Login from "../pages/login";
import Main from "../components/main/main";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={() => <Login />} />
          <Route path="/" component={() => <Main />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
