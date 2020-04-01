import React from "react";
import './style.css';
import { Link } from "react-router-dom";

export const NewsDetails = props => {
  const { news, edit } = props;

  if (!news) {
    return <div className="loading">Loading News.....</div>;
  }
  let date = new Date(news.news_created_at).toLocaleDateString();

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
              <small className="text-muted">{date}</small>
            </p>

            <p className="card-text">{news.news_info}</p>

            <p><small>Status: {news.news_status}</small></p>
          
            <p>
              Created_by <small className="text-muted">
                <a href={news.user_address}>{news.user_name}</a>
        </small>
            </p>
            <button onClick={() => edit(news.news_id)}>Edit</button>
          </div>
        </div>
      </div> : "Nothing to show"}
    </div>
  );
};
