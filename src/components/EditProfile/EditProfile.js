import React, { Component } from "react";
import PrivateService from "../../services/private.service";
import { withAuth } from "./../../context/auth.context";
import "./EditProfile.css";

class EditProfile extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const { _id } = this.props.user;
    PrivateService.editProfile(username, email, password, _id);
    this.setState({
      username: "",
      password: "",
      email: "",
    });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="edit-container">
        <div className="edit-form">
          <form onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input
              className="slide"
              type="text"
              name="username"
              placeholder={this.props.user.username}
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Email:</label>
            <input
              className="slide"
              name="email"
              type="email"
              placeholder={this.props.user.email}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              className="slide"
              name="password"
              type="password"
              placeholder="********"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit">
              Apply
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default withAuth(EditProfile);
