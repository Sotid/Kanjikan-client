import React from "react";
import lessonsService from "../../services/lessons.service";
import { Link } from "react-router-dom";
import KanjiDetails from "../KanjiDetails/Kanji.details";
import "./Home.css";

class Home extends React.Component {
  state = {
    lessons: [],
  };
  componentDidMount() {
    this.loadLessons();
  }
  loadLessons = () => {
    lessonsService
      .getAllLessons()
      .then((lesson) => this.setState({ lessons: lesson }));
  };
  render() {
    const { lessons } = this.state;
    console.log(this.state.lessons);
    return (
  
      <div>
        {lessons.map((allLessons) => (
          <div key={allLessons._id}>
            <Link to={`/lessons/${allLessons._id}`}>
              <h2>{allLessons.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
