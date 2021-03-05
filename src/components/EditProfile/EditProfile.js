
import React, { Component } from "react";
import PrivateService from "../../services/private.service";
import { withAuth } from "./../../context/auth.context";


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
  };


  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
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

export default withAuth(EditProfile);