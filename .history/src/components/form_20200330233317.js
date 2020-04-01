import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      city: "",
      new: []
    };
  }

  handleOnSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const { contacts } = this.props;

    const { name, email, city } = this.state;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("city", city);

    await axios({
      method: "POST",
      url: "http://127.0.0.1:8080/index.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/json" } }
    })
      .then(response => {
        console.log("response success", response);
      })
      .catch(response => {
        console.log("error response", response);
      });
    this.setState({ new: contacts });
  };

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
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
