import React from "react";
import News from "../../components/News/News";
import Music from "../../components/Music/Music";
import Syllabaries from "../../components/Syllabaries/Syllabaries";
import Blogs from "../../components/Blogs/Blogs";
import Videos from "../../components/Videos/Videos";

class Resources extends React.Component {
  state = {
    showNews: false,
    showMusic: false,
    showSyllabaries: false,
    showBlogs: false,
    showVideos: false,
  };

  toggleNews = () => {
    this.setState({ showNews: !this.state.showNews });
  };

  toggleMusic = () => {
    this.setState({ showMusic: !this.state.showMusic });
  };
  toggleSyllabaries = () => {
    this.setState({ showSyllabaries: !this.state.showSyllabaries });
  };
  toggleBlogs = () => {
    this.setState({ showBlogs: !this.state.showBlogs });
  };
  toggleVideos = () => {
    this.setState({ showVideos: !this.state.showVideos });
  };

  render() {
    return (
      <div>
        <div className="news-container">
          <p>News</p>
          <button onClick={this.toggleNews}>Show More</button>
          {this.state.showNews ? <News /> : null}
        </div>
        <div className="music-container">
          <p>Music</p>
          <button onClick={this.toggleMusic}>Show More</button>
          {this.state.showMusic ? <Music /> : null}
        </div>
        <div className="syllabaries-container">
          <p>Syllabaries</p>
          <button onClick={this.toggleSyllabaries}>Show More</button>
          {this.state.showSyllabaries ? <Syllabaries /> : null}
        </div>
        <div className="videos-container">
          <p>Video Tutorials</p>
          <button onClick={this.toggleVideos}>Show More</button>
          {this.state.showVideos ? <Videos /> : null}
        </div>
        <div className="blogs-container">
          <p>Recommended Blogs</p>
          <button onClick={this.toggleBlogs}>Show More</button>
          {this.state.showBlogs ? <Blogs /> : null}
        </div>
      </div>
    );
  }
}

export default Resources;
