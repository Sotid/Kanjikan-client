import React, { Component } from "react";
import { withAuth } from "./../../context/auth.context";
import { Link } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile";
import privateService from "./../../services/private.service"
import AuthService from "./../../services/auth.service";


class Private extends Component {
  constructor(props){
    super()
  this.state = {
    showEdit: false,
  };
}
  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  deleteKanji = (kanjiId, userId) => {
    privateService.deleteFromBookmarks(
      { kanjiId: kanjiId },
      userId
    );
  
    AuthService.me();

  };

  render() {

    console.log(this.props.user);
    return (
      <div className="user-details">
        <h2>Welcome{this.props.user && this.props.user.username}</h2>
        <div>
          {/* <p>Username: {this.props.user.username}</p> 
           <p>Email: {this.props.user.email}</p> */}
          <button onClick={this.toggleEdit}>Edit</button>
          {this.state.showEdit ? <EditProfile /> : null}
        </div>
        <div className="bookmarks-container">
          {this.props.user && this.props.user.bookmarks.map((data) => {
            return (
              <div key={data._id} className="bookmark">
                 <Link to={`/kanji/${data._id}`}>
                  <h3>{data.kanji}</h3>
                
                </Link> 
                <p> {data.meanings + " "} </p>
                <button onClick={this.deleteKanji((data._id, this.props.user._id))}>Delete</button>
              </div>
            );
          })
          }
        </div>
      </div>
    );
  }
}
export default withAuth(Private);