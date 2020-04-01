import React from 'react';
import axios from "axios";
import Form from "../form/form";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          news: []
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
    
      insertUser = (values) => {
    
        axios.post("http://127.0.0.1:8080/add.php",values)
        .then(data => {
          if(data.success == 1) {
            this.setState({ news:[
            {"news_title":values.news_title,"news_info":values.news_info,"news_status":values.news_status,"news_created_by":values.news_created_by,"news_created_at":values.news_created_at,"news_updated_by":values.news_updated_by}, ...this.state.news]
          });
        }})
      };
    
    
      render() {
        const { news } = this.state;
        return (
          <div>
            <h1>News</h1>
          {news && news.map(el => (
          <>
            <p>{el.news_title}</p>
            <p>{el.news_info}</p>
            <p>{el.news_status}</p>
            <p>{el.user_name} source {el.user_address}</p>
            <p>{el.news_created_at}</p>
            <p>{el.user_name}</p> 
            <button >Edit</button>
            <hr/>
          </>
          )
          )}
            <Form news={this.state.news} insertUser={this.insertUser} />
          </div>
        );
      }
    }
    
export default Main;