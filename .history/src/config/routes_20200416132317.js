// React Imports
import React from "react";

// Libraries Imports
import { Switch, Route } from "react-router-dom";

// Config Imports
import ProtectedRoutes from "./ProtectedRoutes";

import Main from './../components/main/main';
import Login from './../pages/login';

const Routes = (props) => {
    return (
        <Switch>
            <ProtectedRoutes
                 path="/"
        exact
        component={() => <Main />}
            />
        </Switch>
    )
}