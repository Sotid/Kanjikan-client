import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class MyProfileService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.myProfile = axios.create({
      baseURL: "http://localhost:5000/api/myprofile",
      withCredentials: true,
    });
  }
  getOneUser = (id) => {
    const pr = this.myProfile.get(`/${id}`).then((response) => response.data);

    return pr;
  };

  editProfile = (id, username, email, password) => {
    const pr = this.myProfile
      .post(`/${id}`, { username, email, password })
      .then((response) => response.data);

    return pr;
  };

  addToBookmarks = (id) => {
    const pr = this.myProfile
      .post(`/${id}/add`, { id })
      .then((response) => response.data);
    return pr;
  };

  deleteFromBookmarks = (id) => {
    const pr = this.myProfile
      .post(`/${id}/delete`, { id })
      .then((response) => response.data);
    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const myProfileService = new MyProfileService();

export default myProfileService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
