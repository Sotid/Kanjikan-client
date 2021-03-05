import React, { Component } from "react";
import { withAuth } from "./../../context/auth.context";
import { Link } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile";
class Private extends Component {
  state = {
    showEdit: false,
  };
  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };
  render() {
    return (
      <div className="user-details">
        <h1>Private Route</h1>
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
        <div>
          <p>Username: {this.props.user.username}</p>
          <p>Email: {this.props.user.email}</p>
          <button onClick={this.toggleEdit}>Edit</button>
          {this.state.showEdit ? <EditProfile /> : null}
        </div>

        <div className="bookmarks-container">
          {this.props.user.bookmarks.map((data) => {
            return (
              <div key={data._id} className="bookmark">
                <Link to={`/kanji/${data._id}`}>
                  <h3>{data.meanings}</h3>
                  <h3>{data.kanji}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withAuth(Private);
