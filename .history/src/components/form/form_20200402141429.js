// React Imports
import React from "react";

// Libraries Imports
import { Route, Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:props.el.news_title,
        info:props.el.news_info,
        status:props.el.news_status,
        updated_by:props.el.news_updated_by
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
  
  
  handleInputUpdatedBy = event => {
    const updated_by = event.target.value;

    this.setState({
      updated_by
    });
    console.log("title", updated_by)

  };
  

  handleSubmit = ()  => {
 

    const values = {
      news_id: this.props.el.news_id,
      news_title: this.state.title,
      news_info: this.state.info,
      news_status: this.state.status,
      news_updated_by: this.state.updated_by,
      
    };

    console.log("values", values);

    this.props.update(values);
  };

  render() {
    const {title, info, status, updated_by} = this.state;
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

          <p>updated by</p>
          <input
            type="text"
            name="updated"
            defaultValue={updated_by}
            onChange={this.handleInputUpdatedBy}
            
          /><hr/>
 
            <button type="submit" className="btn btn-primary">Submit</button>
   
              
           
        </form>
      </div>
    );
  }
}

export default Form;
