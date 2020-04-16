// React Imports
import React from "react";

// Libraries Imports


import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../pages/login";
import Main from "../components/main/main";


const Routes = (props) => (
<Switch>
<Route exact path='/Login' component={Login}/>
<Route path="/Main" component={Main} />
</Switch>
)
export default Routes;