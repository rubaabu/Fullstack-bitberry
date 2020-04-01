import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    const API_PATH = "http://127.0.0.1:8080/webservice.php";
    
    fetch(API_PATH)
    .then(response => response.json())
    .then(data => this.setState({ users:data  }));
    console.log(this.state.users);
  }
  render() {
    return(
      <div>
      <h1>USER</h1>
     
      </div>
    )
  }
}

export default App;
