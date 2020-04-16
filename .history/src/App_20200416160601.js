// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Libraries Imports
import {  BrowserRouter} from "react-router-dom";

// Components Imports
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import {Routes} from "./config/Routes";

class App extends React.Component {
 
 
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
            <Routes />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
