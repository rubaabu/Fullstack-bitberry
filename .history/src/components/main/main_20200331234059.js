import React from "react";
import axios from "axios";
import Form from "../form/form";
import './style.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      status:[]
    };
  }

  componentDidMount() {
    const API_PATH = "http://127.0.0.1:8080/read.php";

    axios
      .get(API_PATH)
      .then(response => response.data)
      .then(data => {
        this.setState({ news: data.news });
        console.log(this.state.news);
      });
  }

  insertUser = values => {
    axios.post("http://127.0.0.1:8080/add.php", values)
    .then(data => {
      this.setState({ status:data.data  });
      if (this.state.status.success == 1) {
        this.setState({
          news: [
            {
              news_title: values.news_title,
              news_info: values.news_info,
              news_status: values.news_status,
              news_created_by: values.news_created_by,
              news_created_at: values.news_created_at,
              news_updated_by: values.news_updated_by
            },
            ...this.state.news
          ]
        });
      } else {
        // console.log(this.state.status)
        alert(this.state.status.msg)
      }
    });
  };

  render() {
    const { news } = this.state;
    return (
      <div className="container">
        <h1>Things to do during the quarantine</h1>
        {news &&
          news.map(el => (
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{el.news_title}</h5>
              <p className="card-text">{el.news_info}</p>

              <p>{el.news_status}</p>
              <p>
                
                <a href= {el.user_address}>{el.user_name}</a>
              </p>
            
              <p class="card-text"><small class="text-muted">el.news_created_at}</small></p>

              <p>{el.user_name}</p>
              <button>Edit</button>
              
              </div>
            </div>
          )
          )
          }
      </div>
    )
  }


}

export default Main;
