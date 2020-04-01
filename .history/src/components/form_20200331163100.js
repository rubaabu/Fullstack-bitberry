import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title="",
        info="",
        status="",
        created_by="",
        created_at="",
        updated_by=""
    };
  }

  handleInputTitle = event => {
    const title = event.target.value;

    this.setState({
      title
    });
  };

  handleInputInfo = event => {
    const info = event.target.value;

    this.setState({
      info
    });
  };
  
  handleInputCreatedBy = event => {
    const created_by = event.target.value;

    this.setState({
      created_by
    });
  };
  
  handleInputCreatedAt = event => {
    const created_at = event.target.value;

    this.setState({
      created_at
    });
  };
  
  handleInputUpdatedBy = event => {
    const updated_by = event.target.value;

    this.setState({
      updated_by
    });
  };
  
  handleInputTitle = event => {
    const title = event.target.value;

    this.setState({
      title
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
          />

          <label>Information</label>
          <input
            type="textarea"
            name="info"
            value={this.state.info}
          />
          <label>status</label>

          <input
            type="text"
            name="status"
            value={this.state.status}
          />

          <label>created_by</label>
          <input
            type="text"
            name="created_by"
            value={this.state.created_by}
          />

          <label>date</label>
          <input
            type="date"
            name="created_At"
            value={this.state.created_at}
          />

          <label>updated by</label>
          <input
            type="text"
            name="updated"
            value={this.state.updated_by}
          />

            <button type="submit" className="btn btn-primary">Add news</button>

        </form>
      </div>
    );
  }
}

export default Form;
