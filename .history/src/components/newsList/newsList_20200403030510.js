// React Imports
import React from "react";

// Styles Imports
import "./style.css";

// Libraries Imports
import { Link } from "react-router-dom";

export const NewsList = props => {
  const { news, detailsClick, sort } = props;

  return (
    <div className="container">
      <h1>Things to do during the quarantine</h1>
      <div className="sort">
        <button className="btn btn-link" onClick={() => sort(news)}>
          Sort by Date
        </button>
      </div>
      {/* loop through the data and send it to the newsCard component */}
      {news &&
        news.map(el => (
          <NewsCard el={el} some={el.news_id} detailsClick={detailsClick} />
        ))}
    </div>
  );
};


// Component returns the data will be called in the exported function component 
// 1. Parameter is the sent props
const NewsCard = props => {
  const { el, some, detailsClick } = props;
  
  // Make the data from dateTime to date 
  let date = new Date(el.news_created_at).toLocaleDateString();

  return (
    <div className="card" key={some}>
      <div className="card-body">
        <h5 className="card-title">{el.news_title}</h5>
        <p className="card-text">
          <small className="text-muted">Created at {date}</small>
        </p>
        <p>
          <small>
            By
            <a href={el.user_address}> {el.user_name}</a>
          </small>
        </p>
        {/* Link router will go to the details view */}
        <Link to="/details">
          <button className="btn btn-primary" onClick={() => detailsClick(el)}>
            More details
          </button>
        </Link>
      </div>
    </div>
  );
};
