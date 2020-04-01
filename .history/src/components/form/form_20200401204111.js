import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        info:"",
        status:"",
        created_by:"",
        created_at:"",
        updated_by:""
    };
  }

  handleInputTitle = event => {
    const title = event.target.value;

    this.setState({
      title
    });
    console.log("title", title)
  };

  handleInputInfo = event => {
    const info = event.target.value;

    this.setState({
      info
    });
    console.log("title", info)

  };
  
  handleInputStatus = event => {
    const status = event.target.value;

    this.setState({
      status
    });
    console.log("title", status)

  };
  
  handleInputCreatedBy = event => {
    const created_by = event.target.value;

    this.setState({
      created_by
    });
    console.log("title", created_by)

  };
  
  handleInputCreatedAt = event => {
    const created_at = event.target.value;

    this.setState({
      created_at
    });
    console.log("title", created_at)

  };
  
  handleInputUpdatedBy = event => {
    const updated_by = event.target.value;

    this.setState({
      updated_by
    });
    console.log("title", updated_by)

  };
  

  handleSubmit = event => {
    event.preventDefault();

    const values = {
      news_title: this.state.title,
      news_info: this.state.info,
      news_status: this.state.status,
      news_created_by: this.state.created_by,
      news_created_at: this.state.created_at,
      news_updated_by: this.state.updated_by
      
    };

    console.log("values", values);

    this.props.update(values);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputTitle}

          /><hr/>

          <p>Information</p>
          <input
            type="textarea"
            name="info"
            value={this.state.info}
            onChange={this.handleInputInfo}

          /><hr/>
          <p>status</p>
          <select onChange={this.handleInputStatus} value={this.state.status}>
            <option value="-" defaultValue>-</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          

          <p>created_by</p>
          <input
            type="text"
            name="created_by"
            value={this.state.created_by}
            onChange={this.handleInputCreatedBy}

          /><hr/>

          <p>date</p>
          <input
            type="datetime"
            name="created_At"
            value={this.state.created_at}
            onChange={this.handleInputCreatedAt}

          /><hr/>

          <p>updated by</p>
          <input
            type="text"
            name="updated"
            value={this.state.updated_by}
            onChange={this.handleInputUpdatedBy}

          /><hr/>

            <button type="submit" className="btn btn-primary">Add news</button>

        </form>
      </div>
    );
  }
}

export default Form;
