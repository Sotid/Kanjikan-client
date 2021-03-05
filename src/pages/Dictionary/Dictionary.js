import React, { Component } from "react";
import dictionaryService from "./../../services/dictionary.service";
import axios from "axios";

class Dictionary extends Component {
  
  state = {
    query: "",
  };



    //   componentDidMount () {
    //       console.log(dictionaryService.getAllKanjis(), 'console.log')
          
    //     //   this.setState({
    //     //       allKanjis: dictionaryService.getAllKanjis()
    //     //   })
    //   }


     handleSearchInput = (event) => {
         console.log(event.target.value)
      let query = event.target.value
      this.setState(() => ({query:query}))

      this.getSearchResults()
      .then((found) => {
          this.setState(() => ({found: found}));
        }
      )

  }



  render() 
  {

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
          <form>
            <input
              placeholder="search for kanjis"
              name="search"
              type="text"
              value={this.state.meaning}
              onChange={this.handleSearchInput}
            />
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

