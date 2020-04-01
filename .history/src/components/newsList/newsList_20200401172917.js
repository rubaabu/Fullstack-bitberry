import React from "react";
import "./style.css";

export class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }


  render() {
    const { news, onClick, sort } = this.props;

    return (
      <div className="container">
        <h1>Things to do during the quarantine</h1>
        <div>
            {/* <button onClick={this.onFilterClick("all")}>All</button>
            <button onClick={this.onFilterClick("Open")}>Open</button>
            <button onClick={this.onFilterClick("Closed")}>Closed</button> */}
        </div>
        {news &&
          news.map(el => (
              
            <div className="card" key={el.news_id}>
              <div className="card-body">
                <h5 className="card-title">{el.news_title}</h5>
                <p className="card-text">
                  <small className="text-muted">{el.news_created_at}</small>
                </p>

                <button className="btn btn-primary" onClick={() => onClick(el)}>
                  More details
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

