// React Imports
import React from "react";

// Libraries Imports
import { Switch, Route } from "react-router-dom";

// Config Imports
import ProtectedRoutes from "./ProtectedRoutes";

import Main from "./../components/main/main";
import Login from "./../pages/login";

const Routes = (props) => {
  return (
    <Switch>
      <ProtectedRoutes path="/" exact component={() => <Main />} />
      <Route exact path="/login" component={() => <Login handleLoggedIn={props.handleLoggedIn} />} />

    </Switch>
  );
};

import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./../pages/login";
import Main from "./../components/main/main";


const Routes = (props) => (
<Switch>
<Route exact path='/Login' component={Login}/>
<Route path="/Main" component={Main} />
</Switch>
)
export default Router;