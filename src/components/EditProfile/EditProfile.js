// A COMENTAR CON JULIAN:
// * PRIVATE.JS -> bookmarks array appears empty after populate
// * DICTIONARY.JS -> promise not resolved
// * EDITPROFILE.JS -> doesnt find id
import React, { Component } from "react";
import PrivateService from "../../services/private.service";
import axios from "axios";
import { withRouter } from "react-router";
class EditProfile extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const { id } = this.props.match.params;
    axios
      .post(`http://localhost:5000/api/private/${id}`, {
        username,
        email,
        password,
      })
      .then(() => {
        PrivateService.editProfile();
      })
      .catch((err) => console.log(err));
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>email:</label>
          <textarea
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>password:</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
// By wrapping EditProfile in withRouter,
// we inject react-router props (match, location, history)
// to the component. This will help us to access the Profile's id from the URL (this.props.match.params)
export default withRouter(EditProfile);