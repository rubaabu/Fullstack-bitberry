import React from "react";
import "./style.css";

export const NewsList = props => {
  const { news, onClick } = props;
console.log(news);
  return (
    <div className="container">
      <h1>Things to do during the quarantine</h1>
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
};
