import React from "react";
import "./style.css";
import {Link } from "react-router-dom";

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
      {news && news.map(el => <Card el={el} key_id={el.news_id} detailsClick={detailsClick} />)}
    </div>
  );
};

const Card = props => {
  const { el, key_id, detailsClick } = props;
  let date = new Date(el.news_created_at).toLocaleDateString();

  return (
    <div className="card" key={key_id}>
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

        <Link to="/details">
          <button className="btn btn-primary" onClick={() => detailsClick(el)}>
            More details
          </button>
        </Link>
      </div>
    </div>
  );
};
