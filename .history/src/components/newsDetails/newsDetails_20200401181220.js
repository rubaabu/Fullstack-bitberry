import React from "react";
import Form from './../form/form'; 


export const NewsDetails = props => {
  const { news, edit } = props;
  console.log("id",news)
  if (!news) {
    return <div className="loading">Loading News.....</div>;
  }

  return (
     news.news_id > 0 ?
    <div>
      <div className="card">
        <div className="card-body" key={news.news_id}>
          <h5 className="card-title">{news.news_title}</h5>
          <p className="card-text">
            <small className="text-muted">{news.news_created_at}</small>
          </p>

          <p className="card-text">{news.news_info}</p>

          <p>{news.news_status}</p>
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
    </div> : null
  );
};
