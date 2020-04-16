// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Components Imports
import Main from "./components/main/main";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import Routes from "./config/ProtectedRoutes";
import {  BrowserRouter} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  handleLoggedIn = (status) => {
    this.setState({ loggedIn: status });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes handleLoggedIn={this.handleLoggedIn} />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
