import React from "react";
import Quiz from "../../pages/QuizPage/QuizPage";
import { QuizData } from "./QuizData";
import "./QuizView.css";
import Start from "./Start";
class Quizview extends React.Component {
  state = {
    userAnswer: null,
    currentIndex: 0,
    choices: [],
    quizEnd: false,
    score: 0,
    disabled: true,
    id: 0,
    quizLength: 0,
  };
  //Get index and start Quiz
  shuffleArray = () => {
    return QuizData.sort(() => Math.random() - 0.5);
  };
  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current index
    this.setState(() => {
      this.shuffleArray();
      return {
        question: QuizData[currentIndex].question,
        choices: QuizData[currentIndex].choices,
        answer: QuizData[currentIndex].answer,
      };
    });
  };
  //Pass to the next question - pass to next index
  nextQuestionHandle = () => {
    const { userAnswer, answer, score } = this.state;
    const random = Math.floor(Math.random() * QuizData.length);
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      quizLength: this.state.quizLength + 1,
    });
    console.log(this.state.quizLength);
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
  //Updating component
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
  //Confirm answers
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
    });
  };
  //Finish quiz when questions finished
  finishHandle = () => {
    if (this.state.quizLength === 10) {
      this.setState({
        quizEnd: true,
      });
    }
  };
  restartQuiz = () => {
    window.location.Reload();
  };
  render() {
    //End screen
    if (this.state.quizEnd) {
      return (
        <div className="box">
          <div className="quiz-container">
            <p>Final score: {this.state.score} out of 10</p>
            <p>Correct answers:</p>
            <ul>
              {QuizData.slice(0, 10).map((item) => (
                <li className="choices">
                  {item.question} {item.answer}
                </li>
              ))}
            </ul>
            {/* Restart Quiz */}
            <div>
              <button
                className="next-btn"
                onClick={() => window.location.reload()}
              >
                Restart
              </button>
              {/* {this.state.show ? <Start /> : null} */}
            </div>
          </div>
        </div>
      );
    }
    return (
      //Quiz view
      <div className="box">
        <div className="quiz-container">
          <h1>{this.state.question}</h1>
          {this.state.choices.map((choice) => (
            <button
              key={choice.id}
              className={`options
                ${this.userAnswer === choice ? "selected" : null}
                `}
              onClick={() => this.checkAnswer(choice)}
            >
              {choice}
            </button>
          ))}
          {this.state.currentIndex < 10 && (
            <div className="next-btn-container">
              <button className="next-btn" onClick={this.nextQuestionHandle}>
                Next
              </button>
            </div>
          )}
          {/* Shows answers */}
          {this.state.quizLength === 10 && (
            <div className="next-btn-container">
              <button className="finish-btn" onClick={this.finishHandle}>
                Finish
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Quizview;
