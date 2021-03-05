import axios from "axios";

class DictionaryService {
  constructor() {
    this.dictionary = axios.create({
      baseURL: "http://localhost:5000/api/dictionary",
      withCredentials: true,
    });
  }

  // getAllKanjis = async () => {
  //   try {
  //     await this.dictionary.get("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  getSearchResults = async () => {
    try {
      let response = await this.dictionary.get(`/`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}
const dictionaryService = new DictionaryService();
export default dictionaryService;
