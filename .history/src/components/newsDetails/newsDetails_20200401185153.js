import React from "react";
import Form from "./../form/form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const NewsDetails = props => {
  const { news, edit } = props;
  console.log("id", news);
  if (!news) {
    return <div className="loading">Loading News.....</div>;
  }

  return (
    <div className="container">
    <div className="back">
    <Link to="/">Back </Link>
    </div>
      {news.news_id > 0 ?
      <div>
        <div className="card">
          <div className="card-body" key={news.news_id}>
            <h5 className="card-title">{news.news_title}</h5>
            <p className="card-text">
              <small className="text-muted">{news.news_created_at}</small>
            </p>

            <p className="card-text">{news.news_info}</p>

            <p><small>Status: {news.news_status}</small></p>
            <p>
              <small>
                <a href={news.user_address}>{news.user_name}</a>
              </small>
            </p>

            <p>
              Created_by<small className="text-muted">{news.user_name}</small>
            </p>
            <button onClick={() => edit(news.news_id)}>Edit</button>
          </div>
        </div>
      </div> : "Nothing to show"}
    </div>
  );
};
