import Login from "../pages/login";
import Main from "../components/main/main";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';
export const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <ProtectedRoutes 
        path="/"
        exact
        component={() => <Main />}
        />
        <Route exact path="/login" component={() => <Login />} />

    
        </Switch>
      </BrowserRouter>
    </div>
  );
};
