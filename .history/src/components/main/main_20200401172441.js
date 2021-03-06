import React from "react";
import axios from "axios";
import { NewsList } from "./../newsList/newsList";
import { NewsDetails } from "./../newsDetails/newsDetails";
import Form from "../form/form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      selected: [],
      update: [],
      status: []
    };
  }

  componentDidMount() {
    const API_PATH = "http://127.0.0.1:8080/read.php";

    axios
      .get(API_PATH)
      .then(response => response.data)
      .then(data => {
        let items = data.news;
        items.sort((a, b) => {
          let nameA = a.news_title.toUpperCase(); // ignore upper and lowercase
          let nameB = b.news_title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        });
        this.setState({ news: items });
     
        // this.sorting(this.state.news)
        console.log(this.state.news);
      });

  }

  sorting = (dat) => {
    let items = dat
   
    items.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }

  onDetailsClick = el => {
    this.setState({ selected: el });
    console.log("ipdate", this.state.selected);
  };




  insertUser = values => {
    axios.post("http://127.0.0.1:8080/add.php", values).then(data => {
      this.setState({ status: data.data });
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
        alert(this.state.status.msg);
      }
    });
  };

  render() {
    const { news, selected } = this.state;
    return (
      <div>
        <NewsList news={news} onClick={this.onDetailsClick} />
        <NewsDetails news={selected} edit={this.edit}/>
       
      </div>
    );
  }
}

export default Main;
