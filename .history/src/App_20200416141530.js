// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Components Imports
import Main from './components/main/main';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import Login from './pages/login';
import Routes from './config/ProtectedRoutes';
import { Switch, Route,BrowserRouter, Redirect } from "react-router-dom";
class App extends React.Component {

  render(){
    return (
      <>
      <Header/>
     
      <Footer/>
      </>
    )
  }
}
export default App;
