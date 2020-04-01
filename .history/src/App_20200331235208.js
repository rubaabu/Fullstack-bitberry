import React from "react";
import "./App.css";
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
