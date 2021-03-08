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
        const { data } = res;
        this.setState({ music: data, isReady: true });
        console.log(data);
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
        <h1>Music</h1>
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
    );
  }
}
export default Music;
