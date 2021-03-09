import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import dictionaryService from "./../../services/dictionary.service";
import AuthService from "./../../services/auth.service";
import axios from "axios";
import { generatePath } from "react-router-dom";
import privateService from "./../../services/private.service"

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
    } catch (err) {}
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchResults();
    this.setState({ result: {}, query: "" });
  };
  
  addKanjiUser = (kanjiId, userId) => {
    privateService.addToBookmarks(
      { kanjiId: kanjiId },
      userId
    );
    // axios.post(generatePath("/private/add/:kanjiId", { kanjiId: kanjiId }), {
    //   userId,
    // });
    window.location.reload()
    AuthService.me();

  };
  render() {
    return (
      <div>
        <div>
            <input
              placeholder="search for kanjis"
              name="search"
              type="text"
              value={this.state.query}
              onChange={this.handleSearchInput}
            />
          <div>
            {this.state.result.map((data, key) => {
              return (
                data && (
                  <div key={key}>
                    {data.kanji}
                    {data.meanings}
                    {data._id}
                    <button
                      onClick={() =>
                        this.addKanjiUser(data._id, this.props.user._id)
                      }
                    >
                      Add Kanji to User
                    </button>
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