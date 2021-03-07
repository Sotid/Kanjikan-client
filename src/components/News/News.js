import React from "react";
import axios from "axios";
import { Link, Redirect, Route } from "react-router-dom";

class News extends React.Component {
  state = {
    news: [],
    isReady: false,
  };

  componentDidMount() {
    this.loadNews();
  }

  loadNews = async () => {
    try {
      let res = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=jp&apiKey=cee726d1eb8c4517a7d4597d6c731727"
      );
      if (res) {
        const { data } = res;
        this.setState({ news: data, isReady: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { news, isReady } = this.state;

    console.log(news);
    return (
      <div>
        {this.state.isReady &&
          news.articles.map((oneArticle) => (
            <div>
              <img src={oneArticle.urlToImage} />
              <a href={oneArticle.url} target="_blank">
                {oneArticle.title}
              </a>
            </div>
          ))}
      </div>
    );
  }
}

export default News;
