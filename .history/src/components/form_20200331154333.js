import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleform = () => {
    const {users, insertUser} = this.props;
    insertUser(event,)
  }

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

        

            <button type="submit" className="btn btn-primary">Add news</button>

        </form>
      </div>
    );
  }
}

export default Form;
