import React from "react";
import axios from "axios";

class Music extends React.Component {
  state = {
    music: [],
    isReady: false,
  };
  loadMusic = async () => {
    try {
      let res = await axios.get(
        "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=japan&api_key=d620d7726ae86f44b956c1a641beeb9f&format=json"
      );
      if (res) {
        console.log(res);
        let findMeaning = res.find((data) => {
          return data.topartists;
        });
        this.setState({ music: [findMeaning], isReady: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  async componentDidMount() {
    this.loadMusic();
  }
  render() {
    const { music, isReady } = this.state;
    console.log(music);
    return (
      <div>
        <h1>Hello</h1>
        {isReady && music.topartists}
      </div>
    );
  }
}
export default Music;
