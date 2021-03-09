import axios from "axios";

class DictionaryService {
  constructor() {
    this.dictionary = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }



  getSearchResults = async () => {
    try {
      let response = await this.dictionary
      .get("/api/dictionary");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}
const dictionaryService = new DictionaryService();
export default dictionaryService;
