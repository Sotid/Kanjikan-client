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


  getSearchResults = async (query) => {
    try{
    await this.dictionary

      .get(`/search/${query}`)
    
    } catch (err) {
      console.log(err)
    }

  }

//  getSearchResults = (query) => {
//   const pr = this.dictionary.get(`/search/${query}`);
//   console.log(pr)
//   return pr;
// };

}
const dictionaryService = new DictionaryService();
export default dictionaryService;