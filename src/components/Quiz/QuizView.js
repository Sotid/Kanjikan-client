import React from "react";
import { QuizData } from "./QuizData";
import "./QuizView.css";

class Quizview extends React.Component {
  state = {
    userAnswer: null,
    currentIndex: 0,
    choices: [],
    quizEnd: false,
    score: 0,
    disabled: true,
  };
  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        choices: QuizData[currentIndex].choices,
        answer: QuizData[currentIndex].answer,
      };
    });
  };
  nextQuestionHande = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
    //Check for correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };
  componentDidMount() {
    this.loadQuiz();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          disabled: true,
          question: QuizData[currentIndex].question,
          choices: QuizData[currentIndex].choices,
          answer: QuizData[currentIndex].answer,
        };
      });
    }
  }
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
    });
  };
  finishHandle = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };
  render() {
    if (this.state.quizEnd) {
      return (
        <div>
          <p>
            Final score: {this.state.score} out of {QuizData.length}
          </p>
          <p>Correct answers:</p>
          <ul>
            {QuizData.map((item) => (
              <li className="choices">
                {item.question} {item.answer}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.state.question}</h1>
        {this.state.choices.map((choice) => (
          <p
            className={`choices ${
              this.state.userAnswer === this.state.choices ? `select` : null
            }`}
            onClick={() => this.checkAnswer(choice)}
          >
            {choice}
          </p>
        ))}
        {/* //When quiz reaches end */}
        {this.state.currentIndex < QuizData.length - 1 && (
          <button onClick={this.nextQuestionHande}>Next</button>
        )}
        {this.state.currentIndex === QuizData.length - 1 && (
          <button className="finish-btn" onClick={this.finishHandle}>
            Finish
          </button>
        )}
      </div>
    );
  }
}
export default Quizview;
