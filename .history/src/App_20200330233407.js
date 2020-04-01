import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Form from "./components/form";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    const API_PATH = "http://127.0.0.1:8080/crud.php";
    
    axios
    .get(API_PATH)
    .then(response => response.data)
    .then(data =>{
       this.setState({ users:data.data  })
    console.log(this.state.users);
      
      });
  }
  render() {
    return(
      <div>
      <h1>USER</h1>
      <Form users={this.state.users}/>
      </div>
    )
  }
}

export default App;
