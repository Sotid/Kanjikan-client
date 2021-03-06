import React, { Component } from "react";
import dictionaryService from "./../../services/dictionary.service";
import axios from "axios";
class Dictionary extends Component {
  state = {
    query: "",
    result: [],
  };


  handleSearchInput = (event) => {
    let query = event.target.value;
    this.setState(() => ({ query: query }));
    this.searchResults(query);
  };


  searchResults = async (query) => {
    try {
      let response = await dictionaryService.getSearchResults();
      console.log(response);
      // this.setState({results: response})
      let findMeaning = response.find((data) => {
        return data.meanings.includes(query);
      });
      this.setState({ result: [findMeaning] });
    } catch (err) {}
  };


  handleSubmit = (event) => {
    console.log("hello");
    event.preventDefault();
    this.searchResults();
    this.setState({ result: {}, query: "" });
  };


  render() {
    console.log(this.state);
    // let calling = async () => {
    //   try {
    //       let all = await axios.get("http://localhost:5000/api/dictionary");
    //       this.setState({
    //           allKanjis: all.data
    //       })
    //   } catch(err) {
    //       console.error(err);
    //   }
    // }
    // calling()
    // const { allKanjis } = this.state;
    return (
      <div>
        <div>
          <form >
            <input
              placeholder="search for kanjis"
              name="search"
              type="text"
              value={this.state.query}
              onChange={this.handleSearchInput}
            />
            <button onSubmit={this.handleSubmit}> Search </button>
            <div>
              {this.state.result.map((data, key) => {
                return (
                  data && (
                    <div key={key}>
                      {data.kanji}
                      {data.meanings}
                    </div>
                  )
                );
              })}
             
            </div>
          </form>
          {/* {allKanjis && allKanjis.map((kanji) => {
            return (
              <div key={kanji.unicode} className="kanji">
                <p>{kanji.kanji}</p>
                <p>Grade:{kanji.grade}</p>
                <p>Onyomi: {kanji.on_readings}</p>
                <p>Kunyomi: {kanji.kun_readings}</p>
                <p>{kanji.meanings}</p>
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }
}
export default Dictionary;