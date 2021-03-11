import React from "react";
import axios from "axios";
import "./Music.css";

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
        const { data } = res;
        this.setState({ music: data, isReady: true });
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
    return (
      <div>
        <h1 className="music-title">Click to listen to japanese music</h1>
        <div className="artists">
          {isReady &&
            music.topartists.artist
              .sort((a, b) => b.name.localeCompare(a.name))
              .splice(0, 16)
              .map((oneArtist) => (
                <div>
                  <a href={oneArtist.url} target="_blank">
                    {oneArtist.name}
                  </a>
                </div>
              ))}
        </div>
      </div>
    );
  }
}
export default Music;
