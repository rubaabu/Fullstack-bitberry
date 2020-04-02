// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Components Imports
import Main from './components/main/main';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
class App extends React.Component {

  render(){
    return (
      <>
      <Header/>
        <Main />
      <Footer/>
      </>
    )
  }
}
export default App;
