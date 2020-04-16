import React from "react";

// Libraries Imports
import { Switch, Route} from "react-router-dom";

// Components Imports
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/login";
import Main from "../components/main/main";
import {NewsDetails} from './../components/newsDetails/newsDetails';
import Form from './../components/form/form';

export const Routes = (props) => {
  return (
    <div>
      <Switch>
        <ProtectedRoutes path="/" exact component={() => <Main />} />
        <ProtectedRoutes path="/details" exact component={() => <NewsDetails />} />
        <ProtectedRoutes path="/edit" exact component={() => <Form />} />
        <Route
          exact
          path="/login"
          component={() => <Login />}
        />
      </Switch>
    </div>
  );
};
