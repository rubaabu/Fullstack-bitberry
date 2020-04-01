import React from "react";

import { Route, Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:props.el.news_title,
        info:props.el.news_info,
        status:props.el.news_status,
        // created_by:props.el.user_name,
        // created_at:props.el.news_created_at,
        updated_by:props.el.news_updated_by
    };
    console.log(this.state.title)
  }

  handleInputTitle = event => {
    const title = event.target.value;
    console.log(this.state.title)

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
  
  // handleInputCreatedBy = event => {
  //   const created_by = event.target.value;

  //   this.setState({
  //     created_by
  //   });
  //   console.log("title", created_by)

  // };
  
  // handleInputCreatedAt = event => {
  //   const created_at = event.target.value;

  //   this.setState({
  //     created_at
  //   });
  //   console.log("title", created_at)

  // };
  
  // handleInputUpdatedBy = event => {
  //   const updated_by = event.target.value;

  //   this.setState({
  //     updated_by
  //   });
  //   console.log("title", updated_by)

  // };
  

  handleSubmit = event => {
    event.preventDefault();

    const values = {
      news_id: this.state,
      news_title: this.state.title,
      news_info: this.state.info,
      news_status: this.state.status,
      // news_created_by: this.state.created_by,
      // news_created_at: this.state.created_at,
      news_updated_by: this.state.updated_by
      
    };

    console.log("values", values);

    this.props.update(values);
  };

  render() {
    const {title, info, status, created_by, created_at, updated_by} = this.state;
    return (
      <div className="container">
      <div className="back">
        <Link to="/">Back </Link>
      </div>
        <form onSubmit={this.handleSubmit}>
          <p>Title</p>
          <input
            type="text"
            name="title"
            onChange={this.handleInputTitle}
            defaultValue={title}
          /><hr/>

          <p>Information</p>
          <input
            type="textarea"
            name="info"
            defaultValue={info}
            onChange={this.handleInputInfo}

          /><hr/>
          <p>status</p>
          <select onChange={this.handleInputStatus} defaultValue={status}>
            <option value="-" defaultValue>-</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          

          {/* <p>created_by</p>
          <input
            type="text"
            name="created_by"
            defaultValue={created_by}
            onChange={this.handleInputCreatedBy}

          /><hr/> */}

          {/* <p>date</p> */}
          {/* <input
            type="datetime"
            name="created_At"
            
            onChange={this.handleInputCreatedAt}

          /><hr/> */}

          <p>updated by</p>
          <input
            type="text"
            name="updated"
            defaultValue={updated_by}
            onChange={this.handleInputUpdatedBy}
            
          /><hr/>

            <button type="submit" className="btn btn-primary">Add news</button>

        </form>
      </div>
    );
  }
}

export default Form;
