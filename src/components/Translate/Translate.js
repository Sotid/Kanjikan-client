import React from "react";
import axios from "axios";
class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      translated: "",
    };
    this.translate = this.translate.bind(this);
  }
  translate() {
    axios
      .post("http://localhost:5000/api/resources")
      .then((data) => {
        this.setState({
          translated: data.data.data.translations[0].translatedText,
        });
        console.log(data.data.data.translations[0].translatedText);
      })
      .catch((err) => {
        console.log("error");
      });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          type="text"
        />
        <button onClick={this.translate}>Submit</button>
        <h1>{this.state.translated}</h1>
      </div>
    );
  }
}
export default Translate;
