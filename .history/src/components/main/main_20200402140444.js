import React from "react";
import axios from "axios";
import { NewsList } from "./../newsList/newsList";
import { NewsDetails } from "./../newsDetails/newsDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./../form/form";

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
        this.setState({ news: data.news });

        console.log(this.state.news);
      });
  }

  sorting = async data => {
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

  onDetailsClick = async el => {
    await this.setState({ selected: el });
  };

  updateNews = async values => {
    const { selected, news, status } = this.state;

    await axios
      .post("http://127.0.0.1:8080/update.php", values)
      .then(data => {
        this.setState({ status: data.data });
        console.log(this.state.status);
        if (status.success == 1) {
          if (selected === values.news_id) {
            this.setState(prevState => ({
              news: [
                {
                  news_id: values.news_id,
                  news_title: values.news_title,
                  news_info: values.news_info,
                  news_status: values.news_status,
                  news_updated_by: values.news_updated_by
                },
                ...prevState.this.state.news
              ],
              selected: []
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
                  sort={this.sorting}
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
