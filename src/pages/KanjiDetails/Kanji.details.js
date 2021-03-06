// TRIED TO DECLARE A COMPONENT SEPARATELLY WITH ITS OWN HANDLECLICK
//OPTION INSIDE, ONLY RENDERS ONE SIDE, DOESNT FLIP
// import React, { Component } from "react";
// import lessonsService from "../../services/lessons.service";
// import ReactCardFlip from "react-card-flip";
// const spinnerURL = "https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif";
// class SingleKanji extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       kanji: [],
//       isReady: false,
//     };
//   }
//   componentDidMount() {
//     this.loadKanji();
//   }
//   loadKanji = () => {
//     const lessonId = this.props.match.params.id;
//     lessonsService.getOneLesson(lessonId).then((lesson) => {
//       this.setState({ kanji: lesson, isReady: true });
//     });
//   };
//   KanjiCard = (singleKanji) => {
//     console.log(this.props, singleKanji);
//     let isFlipped = false;
//     const handleClick = (event) => {
//       event.preventDefault();
//       return isFlipped ? !isFlipped : isFlipped;
//     };
//     return (
//       <ReactCardFlip
//         key={singleKanji._id}
//         isFlipped={isFlipped}
//         flipDirection="vertical"
//       >
//         <div>
//           <h1> {singleKanji.kanji}</h1>
//           This is the front of the card.
//           <button onClick={handleClick}>Click to flip</button>
//         </div>
//         <div>
//           <h1> {singleKanji.kanji}</h1>
//           <h1> {singleKanji.meanings}</h1>
//           This is the back of the card.
//           <button onClick={handleClick}>Click to flip</button>
//         </div>
//       </ReactCardFlip>
//     );
//   };
//   render() {
//     const { kanji, isReady } = this.state;
//     if (!isReady) return <img src={spinnerURL} alt="loading spinner" />;
//     return (
//       <div className="card">
//         {kanji.kanji.map((singleKanji) => {
//           return this.KanjiCard(singleKanji);
//         })}
//       </div>
//     );
//   }
// }
// export default SingleKanji;
// IT FLIPS: AS STATE IS DEFINED FOR EVERY CARD,
// ALL CARDS FLIP WHEN BUTTON IS CLICKED
import React, { Component } from "react";
import lessonsService from "../../services/lessons.service";
import ReactCardFlip from "react-card-flip";
import KanjiCard from "../../components/KanjiCard/KanjiCard";
const spinnerURL = "https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif";
class SingleKanji extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
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
  handleClick = (event) => {
    event.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };
  render() {
    const { kanji, isReady } = this.state;
    if (!isReady) return <img src={spinnerURL} alt="loading spinner" />;
    return (
      <div className="card">
        {kanji.kanji.map((singleKanji) => {
          return (
            <ReactCardFlip
              key={singleKanji._id}
              isFlipped={this.state.isFlipped}
              flipDirection="vertical"
            >
              <div>
                <h1> {singleKanji.kanji}</h1>
                This is the front of the card.
                <button onClick={this.handleClick}>Click to flip</button>
              </div>
              <div>
                <h1> {singleKanji.kanji}</h1>
                <h1> {singleKanji.meanings}</h1>
                This is the back of the card.
                <button onClick={this.handleClick}>Click to flip</button>
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
    );
  }
}
export default SingleKanji;