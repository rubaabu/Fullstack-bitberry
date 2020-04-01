import React from "react";
import "./App.css";
import Main from './components/main/main';
import {Header} from './components/header/header';
class App extends React.Component {

  render(){
    return (
      <>
      <Header/>
        <Main />
      </>
    )
  }
}
export default App;
