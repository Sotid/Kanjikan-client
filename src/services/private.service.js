import { generatePath } from "react-router-dom";
import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class PrivateService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.private = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true,
    });
  }

  getOneUser = async (
    username,
    password,
    email,
    bookmarks,
    lessonsCompleted,
    userId
  ) => {
    try {
      let response = await this.private.get(`/api/private/${userId}`, {
        username,
        password,
        email,
        bookmarks,
        lessonsCompleted,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  editProfile = async (username, email, password, userId) => {
    try {
      console.log(username, email, password, userId);
      let response = await this.private.post(
        generatePath("/api/private/:userId/edit", { userId: userId }),
        { username, email, password }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  addToBookmarks = async (kanjiId, userId) => {
    try {
      let response = await this.private.post(`/api/private/${kanjiId}`,
        { kanjiId} )
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  deleteFromBookmarks = async (id) => {
    try {
      let response = await this.private.post(`/api/private/${id}/delete`, { id });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}

const privateService = new PrivateService();

export default privateService;
