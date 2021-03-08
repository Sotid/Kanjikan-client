import React, { Component } from "react";
import lessonsService from "../../services/lessons.service";
import "./Kanji.details.css";
const spinnerURL = "https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif";
class SingleKanji extends Component {
  constructor() {
    super();
    this.state = {
      kanji: [],
      isReady: false,
    };
  }
  componentDidMount() {
    this.loadKanji();
  }
  loadKanji = () => {
    const lessonId = this.props.match.params.id;
    lessonsService.getOneLesson(lessonId).then((lesson) => {
      this.setState({ kanji: lesson, isReady: true });
    });
  };
  render() {
    const { kanji, isReady } = this.state;
    if (!isReady) return <img src={spinnerURL} alt="loading spinner" />;
    return (
      <div className="card">
        {kanji.kanji.map((singleKanji) => {
          return (
            <div
              className="flip-container"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front">
                  <h1> {singleKanji.kanji}</h1>
                  <p>{singleKanji.meanings}</p>
                </div>
                <div className="back">
                  <ul>
                    <h2> {singleKanji.kanji}</h2>
                    <li> Difficulty level: {singleKanji.grade}</li>
                    <li> Strokes: {singleKanji.stroke_count}</li>
                    <li> Meanings: {singleKanji.meanings}</li>
                    <li> Kunyomi: {singleKanji.kun_readings}</li>
                    <li> Onyomi: {singleKanji.on_readings}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SingleKanji;
