import React, { Component } from "react";
import { withAuth } from "./../../context/auth.context";
import EditProfile from "../../components/EditProfile/EditProfile";
import privateService from "./../../services/private.service";
import AuthService from "./../../services/auth.service";
import "./Private.css";

class Private extends Component {
  constructor(props) {
    super();
    this.state = {
      showEdit: false,
      kanjis: [],
    };
  }

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  componentDidMount = () => {
    const bookmarksArr = [...this.props.user.bookmarks];
    this.setState({ kanjis: bookmarksArr });
  };

  deleteKanji = (kanjiId, userId) => {
    privateService.deleteFromBookmarks(kanjiId, userId);
    const newArr = [...this.state.kanjis];

    const filtered = newArr.filter((deleted) => {
      return deleted._id !== kanjiId;
    });

    this.setState({ kanjis: filtered });
    this.props.user.bookmarks = filtered;
    AuthService.me();
  };

  render() {
    return (
      <div className="user-details">
        <h2>Welcome {this.props.user && this.props.user.username}!</h2>
        <div>
          <p>Username: {this.props.user.username}</p>
          <p>Email: {this.props.user.email}</p>
          <button className="edit-btn" onClick={this.toggleEdit}>
            Edit
          </button>
          {this.state.showEdit ? <EditProfile /> : null}
        </div>
        <br />
        <div className="card">
          <h3>My bookmarks</h3>
          {this.state.kanjis.length === 0
            ? this.props.user.bookmarks.map((data) => {
                const {
                  kanji,
                  grade,
                  stroke_count,
                  meanings,
                  kun_readings,
                  on_readings,
                } = data;
                return (
                  <div
                    className="flip-container"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div className="flipper">
                      <div className="front">
                        <h1> {kanji}</h1>
                        <p>{meanings.map((meaning) => meaning + ", ")}</p>
                      </div>
                      <div className="back">
                        <h2> {kanji}</h2>

                        <ul>
                          <li> Difficulty level: {grade}</li>
                          <li> Strokes: {stroke_count}</li>
                          <li>
                            {" "}
                            Meanings:
                            {meanings.map((meaning) => meaning + ", ")}
                          </li>
                          <li>
                            {" "}
                            Kunyomi: {kun_readings.map((kun) => kun + ", ")}
                          </li>
                          <li> Onyomi: {on_readings.map((on) => on + ", ")}</li>
                        </ul>
                        <button
                          className="edit-btn"
                          onClick={() =>
                            this.deleteKanji(data._id, this.props.user._id)
                          }
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : this.state.kanjis.map((data) => {
                const {
                  kanji,
                  grade,
                  stroke_count,
                  meanings,
                  kun_readings,
                  on_readings,
                } = data;
                return (
                  <div
                    className="flip-container"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div className="flipper">
                      <div className="front">
                        <h1> {kanji}</h1>
                        <p>{meanings.map((meaning) => meaning + ", ")}</p>
                      </div>
                      <div className="back">
                        <h2> {kanji}</h2>

                        <ul>
                          <li> Difficulty level: {grade}</li>
                          <li> Strokes: {stroke_count}</li>
                          <li>
                            {" "}
                            Meanings:{" "}
                            {meanings.map((meaning) => meaning + ", ")}
                          </li>
                          <li>
                            {" "}
                            Kunyomi: {kun_readings.map((kun) => kun + ", ")}
                          </li>
                          <li> Onyomi: {on_readings.map((on) => on + ", ")}</li>
                        </ul>
                        <button
                          onClick={() =>
                            this.deleteKanji(data._id, this.props.user._id)
                          }
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
export default withAuth(Private);
