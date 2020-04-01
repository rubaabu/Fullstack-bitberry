import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Form from "./components/form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const API_PATH = "http://127.0.0.1:8080/crud.php";

    axios
      .get(API_PATH)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data.users });
        console.log(this.state.users);
      });
  }

  insertUser = (event,news_title,news_info,news_status,news_created_by,news_created_at,news_updated_by) => {

    event.preventDefault();
    axios.post("http://127.0.0.1:8080/add.php",{
      news_title:news_title,
      news_info:news_info,
      news_status:news_status,
      news_created_by:news_created_by,
      news_created_at:news_created_at,
      news_updated_by:news_updated_by
    })
    .then(data => {
      if(data.success == 1) {
        this.setState({ users:[
        {"news_title":news_title,"news_info":news_info,"news_status":news_status,"news_created_by":news_created_by,"news_created_at":news_created_at,"news_updated_by":news_updated_by}, ...this.state.users]
      });
      }
      else{
        alert(data.msg)
      }
    }
    )
  

  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>USER</h1>
        {users &&
          users.map(user => (
            <>
              <p>{user.news_title}</p>
              <p>{user.news_info}</p>
            </>
          ))}

        <Form users={this.state.users} insertUser={this.insertUser} />
      </div>
    );
  }
}

export default App;
