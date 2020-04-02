// React Imports
import React from "react";

// Libraries Imports
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components Imports
import { NewsList } from "./../newsList/newsList";
import { NewsDetails } from "./../newsDetails/newsDetails";
import Form from "./../form/form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      selected: [],
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

  // Method to sort the data by date
  // 1. Parameter is the data
  sortingDate = async data => {
    let items = data;
    await items.sort((a, b) => {
      let nameA = a.news_created_at;
      let nameB = b.news_created_at;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ news: items });
  };


  // Method as Callback function to set the state with the id
  // 1. Parameter is the id of the data
  onDetailsClick = async el => {
    await this.setState({ selected: el });
  };


  // Method to update the data with the inserted values
  // 1. Parameter is the values as obj
  updateNews = async values => {
    const { selected, status } = this.state;
    const PATH = "http://127.0.0.1:8080/update.php";

    await axios
      .post("http://127.0.0.1:8080/update.php", values)
      .then(data => {
        this.setState({ status: data.data });
        console.log(this.state.status);
        if (status.success == 1) {
          // check if the same id
          if (selected === values.news_id) {

            this.setState(
              news: [
                {
                  news_id: values.news_id,
                  news_title: values.news_title,
                  news_info: values.news_info,
                  news_status: values.news_status,
                  news_updated_by: values.news_updated_by
                },
                ...this.state.news
              ]
            }));
          } else {
            alert(this.state.status.msg);
          }
        }
      })
      .then(() => {
        alert("data updated");
      });
  };

  render() {
    const { news, selected } = this.state;
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <NewsList
                  sort={this.sortingDate}
                  news={news}
                  detailsClick={this.onDetailsClick}
                />
              )}
            />

            <Route
              path="/details"
              component={() => <NewsDetails el={selected} />}
            />
            <Route
              path="/edit"
              component={() => <Form el={selected} update={this.updateNews} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
