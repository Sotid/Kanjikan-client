import axios from "axios";

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  signup = async ( username, email, password ) =>{
    try {
      let response = await this.auth
      .post("/auth/signup", { username, email, password })
      return response.data;
    } catch (err) {
      console.log(err)}
  }


  login = async ( username, password ) =>{
    try {
      let response = await this.auth
      .post("/auth/login", { username, password })
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  logout = async () => {
    try{
    let response = await this.auth
      .get("/auth/logout");
      return response.data

    }catch (err) {
    console.log(err)
  }
}


  me() {
    const pr = this.auth
      .get("/auth/me")
      .then((response) => response.data);

    return pr;
  }
}


const authService = new AuthService();

export default authService;

