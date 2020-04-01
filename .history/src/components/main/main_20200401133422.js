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
      selected: null,
      update:null,
      status: []
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

  onDetailsClick = el => {
    this.setState({ selected: el });
    console.log("selected", this.state.selected);
  };
  onUpdateClick = one => {
    this.setState({ selected: one });
    console.log("update", this.state.update);
  };

  updateNews = values => {
    axios.post("http://127.0.0.1:8080/update.php", values).then(data => {
      this.setState({ status: data.data });
      if (this.state.status.success == 1) {
        this.setState({
          news: [
            { news_id: this.state.selected,
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
        <NewsDetails news={selected} onClick={this.onUpdateClick} />
        <Form update={this.updateNews}/>
      </div>
    );
  }
}

export default Main;
