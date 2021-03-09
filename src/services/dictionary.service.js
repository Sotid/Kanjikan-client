import axios from "axios";

class DictionaryService {
  constructor() {
    this.dictionary = axios.create({
      baseURL: "http://localhost:5000",
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
