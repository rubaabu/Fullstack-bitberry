// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Components Imports
import Main from "./components/main/main";
import Login from "./pages/login";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
          <Route
            path="/login"
            exact
            component ={() =>  <Login />}
          />
          <Route
            path="/"
            component ={() =>  <Main />}

          />
    
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}
export default App;
