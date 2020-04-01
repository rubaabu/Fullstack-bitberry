import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    const API_PATH = "http://127.0.0.1:8080/webservice.php?id=1";
    
    axios
    .get(API_PATH)
    .then(response => response.data)
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
