import React from "react";
import "./style.css";
export const NewsList = props => {


  
    const { news, detailsClick, sort } = props;

    return (
      <div className="container">
        <h1>Things to do during the quarantine</h1>
        <div className="sort">
            {/* <button onClick={this.onFilterClick("all")}>All</button>
            <button onClick={this.onFilterClick("Open")}>Open</button>
            <button onClick={this.onFilterClick("Closed")}>Closed</button> */}
            <button className="btn btn-link" onClick={() => sort(news)}>Sort by Date</button>
        </div>
        {news &&
          news.map(el => (
              
           <Card el={el} detailsClick={detailsClick}/>
          ))}
      </div>
    );
  }
}

const Card = (props) =>{

    const {el, detailsClick} = props;

    return (
        <div className="card" key={el.news_id}>
        <div className="card-body">
          <h5 className="card-title">{el.news_title}</h5>
          <p className="card-text">
            <small className="text-muted">{el.news_created_at}</small>
          </p>

          <button className="btn btn-primary" onClick={() => detailsClick(el)}>
            More details
          </button>
        </div>
      </div>
    )
}