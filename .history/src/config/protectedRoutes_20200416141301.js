// React Imports
import React from "react";

// Libraries Imports

import { Switch, Route,BrowserRouter, Redirect } from "react-router-dom";
import Login from "../pages/login";
import Main from "../components/main/main";

const Routes = (props) => {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/Login" component={() => <Login/>} />
    <Route path="/" component={() => <Main/>} />
  </Switch>
  </BrowserRouter>
  );
};
export default Routes;
