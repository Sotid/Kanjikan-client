import React from "react";
import Quizview from "./QuizView";
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
      <div>
        {this.state.visible ? (
          <Quizview />
        ) : (
          <div>
            <h1>Start the quiz!</h1>
            <button onClick={this.startQuiz}>Start</button>
          </div>
        )}
      </div>
    );
  }
}
export default Start;
