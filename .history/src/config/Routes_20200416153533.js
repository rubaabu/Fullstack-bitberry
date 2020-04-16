
import React from "react";
import { Switch, Route} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/login";
import Main from "../components/main/main";
import NewsList from './../components/newsList';
import {NewsDetails} from './../components/newsDetails/newsDetails';
import Form from './../components/form/form';

export const Routes = (props) => {
  return (
    <div>
      <Switch>
        <ProtectedRoutes path="/" exact component={() => <Main />} />
        <ProtectedRoutes path="/" exact component={() => <NewsList />} />
        <ProtectedRoutes path="/" exact component={() => <NewsDetails />} />
        <ProtectedRoutes path="/" exact component={() => <Form />} />
        <Route
          exact
          path="/login"
          component={() => <Login />}
        />
      </Switch>
    </div>
  );
};
