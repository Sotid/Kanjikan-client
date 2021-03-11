import React from "react";
import Quizview from "./QuizView";
import "./Start.css";
class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.startQuiz = this.startQuiz.bind(this);
  }
  startQuiz() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <div className="start-container">
        {this.state.visible ? (
          <Quizview />
        ) : (
          <div>
            <h1 className="start-title">Start the quiz!</h1>
            <button className="next-btn start-btn" onClick={this.startQuiz}>
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Start;