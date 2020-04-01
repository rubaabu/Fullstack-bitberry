import React from "react";
import "./style.css";

export class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }

  onFilterClick = e => {
      this.setState({ filter:e  });
  }

  render() {
    const { news, onClick } = this.props;

    return (
      <div className="container">
        <h1>Things to do during the quarantine</h1>
        <div>
            <button onClick={this.onFilterClick("all")}>All</button>
            <button onClick={this.onFilterClick("Open")}>Open</button>
            <button onClick={this.onFilterClick("Closed")}>Closed</button>
        </div>
        {news &&
          news.map(el => {<>
            {this.state.filter == "all" ? <Card onClick={onClick} el={el}/> : this.state.filter == "Open" && el.news_status == "Open" ? <Card el={el}/> : null
            }</>
        })}
      </div>
    );
  }
}
const Card = (el, props) => {
    
    return (
    <div className="card" key={el.news_id}>
              <div className="card-body">
                <h5 className="card-title">{el.news_title}</h5>
                <p className="card-text">
                  <small className="text-muted">{el.news_created_at}</small>
                </p>

                <button className="btn btn-primary" onClick={() => props.onClick(el)}>
                  More details
                </button>
              </div>
            </div> 
    )
}
