import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class DictionaryService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.dictionary = axios.create({
      baseURL: "http://localhost:5000/api/dictionary",
      withCredentials: true,
    });
  }

  getAll = () => {
    const pr = this.dictionary.get("/").then((response) => response.data);
    return pr;
  };

  getSearchResults = (query) => {
    const pr = this.dictionary.get(`/search/${query}`);
    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const dictionaryService = new DictionaryService();

export default dictionaryService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
