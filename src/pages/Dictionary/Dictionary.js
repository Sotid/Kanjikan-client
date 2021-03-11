import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import dictionaryService from "./../../services/dictionary.service";
import AuthService from "./../../services/auth.service";
import privateService from "./../../services/private.service";
import "./Dictionary.css";

class Dictionary extends Component {
  constructor(props) {
    super();
    this.state = {
      query: "",
      result: [],
    };
  }

  handleSearchInput = (event) => {
    let query = event.target.value;
    this.setState(() => ({ query: query }));
    this.searchResults(query);
  };

  searchResults = async (query) => {
    try {
      let response = await dictionaryService.getSearchResults();
      let findMeaning = response.find((data) => {
        return data.meanings.includes(query);
      });
      this.setState({ result: [findMeaning] });
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchResults();
    this.setState({ result: {}, query: "" });
  };

  addKanjiUser = (kanjiId, userId) => {
    privateService.addToBookmarks({ kanjiId: kanjiId }, userId);
    window.location.reload();
    AuthService.me(this.props.user._id);
  };

  render() {
    return (
      <div>
        <div className="dictionary">
          <div className="search">
            <input
              className="search-input"
              placeholder="Search for kanji"
              name="search"
              type="text"
              value={this.state.query}
              onChange={this.handleSearchInput}
            />
          </div>
          <div className="card">
            {this.state.result.map((data, key) => {
              return (
                data && (
                  <div
                    className="flip-container"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div className="flipper">
                      <div className="front" key={key}>
                        <h1>{data.kanji}</h1>
                        <p>{data.meanings.map((meaning) => meaning + ", ")}</p>
                      </div>
                      <div className="back">
                        <h2> {data.kanji}</h2>
                        <ul>
                          <li> Difficulty level: {data.grade}</li>
                          <li> Strokes: {data.stroke_count}</li>
                          <li>
                            {" "}
                            Meanings:{" "}
                            {data.meanings.map((meaning) => meaning + ", ")}
                          </li>
                          <li>
                            {" "}
                            Kunyomi:{" "}
                            {data.kun_readings.map((kun) => kun + ", ")}
                          </li>
                          <li>
                            {" "}
                            Onyomi: {data.on_readings.map((on) => on + ", ")}
                          </li>
                        </ul>
                        <button
                          onClick={() =>
                            this.addKanjiUser(data._id, this.props.user._id)
                          }
                        >
                          Add Kanji to User
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default withAuth(Dictionary);
