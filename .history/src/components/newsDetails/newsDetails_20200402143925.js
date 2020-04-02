// React Imports
import React from "react";

// Styles Imports
import "./style.css";

// Libraries Imports
import { Link } from "react-router-dom";

export const NewsDetails = props => {
  const { el } = props;
  if (!el) {
    return <div className="loading">Loading News.....</div>;
  }

  // Make the data from dateTime to date
  let date = new Date(el.news_created_at).toLocaleDateString();

  return (
    <div className="container">
      <div className="back">
        <Link to="/">Back </Link>
      </div>
      {el.news_id > 0 ? (
        <div>
          <div className="card">
            <div className="card-body" key={el.news_id}>
              <h5 className="card-title">{el.news_title}</h5>
              <p className="card-text">
                <small className="text-muted">{date}</small>
              </p>

              <p className="card-text">{el.news_info}</p>

              <p>
                <small>Status: {el.news_status}</small>
              </p>

              <p>
                Created_by
                <small className="text-muted">
                  <a href={el.user_address}>{el.user_name}</a>
                </small>
              </p>

              <Link to="/edit">
                <button className="btn btn-primary">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        "Nothing to show"
      )}
    </div>
  );
};
