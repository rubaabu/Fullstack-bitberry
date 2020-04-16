// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Components Imports
import Main from './components/main/main';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import Login from './pages/login';
import Routes from './config/protectedRoutes';
import { Switch, Route,BrowserRouter, Redirect } from "react-router-dom";
import {Authenticated} from './config/auth'M
class App extends React.Component {

  render(){
    return (
      <>
      <Header/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/Login" component={() => <Login/>} />
        <Route path="/" component={() => <Main/>} />
      </Switch>
    </BrowserRouter>
      <Footer/>
      </>
    )
  }
}
export default App;
