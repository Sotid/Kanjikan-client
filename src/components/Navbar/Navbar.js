import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth.context";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img className="logo" src="https://i.postimg.cc/fL88FzDF/logo.png" />
        <div>
          <ul className="nav-list">
            <Link to={"/lessons"} className="nav-text">
              <li>Home</li>
            </Link>

            <Link to={"/dictionary"} className="nav-text">
              <li>Dictionary</li>
            </Link>

            <Link to={"/private"} className="nav-text">
              <li>My profile</li>
            </Link>

            <Link to={"/resources"} className="nav-text">
              <li>Resources</li>
            </Link>

            <Link to={"/quiz"} className="nav-text">
              <li>Quiz</li>
            </Link>
          </ul>
        </div>
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
