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

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <input
            type="text"
            name="news_title"
            value={this.state.title}
            onChange={e => this.setState({ name: e.target.value })}
          />

          <label>Information</label>
          <input
            type="textarea"
            name="news_info"
            value={this.state.info}
            onChange={e => this.setState({ email: e.target.value })}
          />

            <input
            type="text"
            name="news_title"
            value={this.state.title}
            onChange={e => this.setState({ name: e.target.value })}
          />

           <input
            type="text"
            name="news_title"
            value={this.state.title}
            onChange={e => this.setState({ name: e.target.value })}
          />

           <input
            type="text"
            name="news_title"
            value={this.state.title}
            onChange={e => this.setState({ name: e.target.value })}
          />
          
           <input
            type="text"
            name="news_title"
            value={this.state.title}
            onChange={e => this.setState({ name: e.target.value })}
          />

            <button type="submit" className="btn btn-primary">Add news</button>

        </form>
      </div>
    );
  }
}

export default Form;
