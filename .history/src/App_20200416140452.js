// React Imports
import React from "react";

// Styles Imports
import "./App.css";

// Components Imports
import Main from './components/main/main';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import Routes from './config/Routes';
class App extends React.Component {

  render(){
    return (
      <>
      <Header/>
      <Router>
        <Switch>
        <Route exact path="/Login" component={() => <Login/>} />
        <Route path="/" component={() => <Main/>} />
      </Switch>
    </Router>
      <Footer/>
      </>
    )
  }
}
export default App;
