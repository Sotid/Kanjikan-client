import React from "react";
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
    // show:false
  };




   //Get index and start Quiz

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

  //Pass to the next question - pass to next index
  nextQuestionHandle = () => {
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
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  restartQuiz = () => {
  window.location.Reload()
  };



  render() {

    //End screen
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

          {/* Restart Quiz */}
          <div>
          <button onClick={() => window.location.reload()}>Restart</button>
          {/* {this.state.show ? <Start /> : null} */}
        </div>

        </div>
      );
    }
    return (

      //Quiz view
      <div>
        <h1>{this.state.question}</h1>
        {this.state.choices.map((choice) => (
          <p key={choice.id} 
                className={`options
                ${this.userAnswer === choice ? `selected` : null}
                `}
                onClick= {() => this.checkAnswer(choice)}

                >
            {choice}
          </p>
        ))}

        {this.state.currentIndex < QuizData.length - 1 && 
          <button 
            onClick={this.nextQuestionHandle}>Next</button>
        }
        
        {/* Shows answers */}
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
