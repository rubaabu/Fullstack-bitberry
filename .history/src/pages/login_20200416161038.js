import React from "react";

import Auth from './../config/auth';
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChangeUsername = (event) => {
    const USER = event.target.value;
    this.setState({
      username: USER,
    });
    console.log(this.state.username);
  };

  handleChangePassword = (event) => {
    const PW = event.target.value;
    this.setState({
      password: PW,
    });
    console.log(this.state.password);
  };

  handleClickSubmit = () => {
    if (this.state.username == "asdf" && this.state.password == "123"){
       
        return Auth.authenticate();
 
    }
  }

  render() {
    return (
      <form className="container">
        <h1>Login</h1>
        <h3>Username</h3>
        <input
          type="text"
          placeholder="username"
          onChange={this.handleChangeUsername}
        />
        <h3>Password</h3>
        <input
          type="password"
          placeholder="password"
          onChange={this.handleChangePassword}
        />
        <br/>
        <Link  to="/">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleClickSubmit}
        >
          Login
        </button></Link>
      </form>
    );
  }
}

export default Login;
