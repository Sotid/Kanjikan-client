import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth.context";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to={"/lessons"} id="home-btn">
          <h4>Home</h4>
        </Link>
      
        <Link to={"/dictionary"} id="dictionary">
          <h3>Dictionary</h3>
        </Link>

        <Link to={"/private"} id="myprofile">
          <h3>My profile</h3>
        </Link>

        <Link to={"/resources"} id="resources">
          <h3>Resources</h3>
        </Link>

        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
          
            <Link to="/login">
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
