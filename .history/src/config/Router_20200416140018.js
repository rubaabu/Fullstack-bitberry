// React Imports
import React from "react";

// Libraries Imports

import { Switch, Router, Redirect } from "react-router-dom";
import Login from "../pages/login";
import Main from "../components/main/main";

const Routes = (props) => {
  return (
      <Router>
    <Switch>
      <Route exact path="/Login" component={Login} />
      <Route path="/Main" component={Main} />
    </Switch></Router>
  );
};
export default Routes;
