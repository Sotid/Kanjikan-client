import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import dictionaryService from "./../../services/dictionary.service";
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
      // this.setState({results: response})
      let findMeaning = response.find((data) => {
        return data.meanings.includes(query);
      });
      this.setState({ result: [findMeaning] });
      console.log(this.state.result)
    } catch (err) {}
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchResults();
    this.setState({ result: {}, query: "" });
  };

  addKanjiUser = (kanjiId, userId) => {
    console.log(kanjiId)
    privateService.addToBookmarks(
      { kanjiId: kanjiId },
      this.props.user._id
    );
    // axios.post(generatePath("/private/add/:kanjiId", { kanjiId: kanjiId }), {
    //   userId,
    // });
  };

  render() {

    return (
      <div>
        <div>
          <form>
            <input
              placeholder="search for kanjis"
              name="search"
              type="text"
              value={this.state.query}
              onChange={this.handleSearchInput}
            />
            <button onSubmit={this.handleSubmit}> Search </button>
          </form>
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
