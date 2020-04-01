import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_address: "",
    
      new: []
    };
  }

  handleOnSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const { users } = this.props;

    const { user_name, user_address } = this.state;
    let formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("user_address", user_address);
    
    
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8080/crud.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/json" } }
    })
      .then(response => {
        console.log("response success", response);
      })
      .catch(response => {
        console.log("error response", response);
      });
    this.setState({ new: users });
  };

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />

          <label>Email</label>
          <input
            type="text"
            name="user_address"
            value={this.state.address}
            onChange={e => this.setState({ email: e.target.value })}
          />

        

          <input
            type="submit"
            onClick={e => this.handleOnSubmit(e)}
            value="Create Contact"
          />
        </form>
      </div>
    );
  }
}

export default Form;
