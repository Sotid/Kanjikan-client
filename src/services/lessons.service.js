import axios from "axios";

class LessonsService {
  constructor() {
    this.lessons = axios.create({
      baseURL: "http://localhost:5000/api/lessons",
      withCredentials: true,
    });
  }

  getAllLessons = async () => {
    try {
    let response = await this.lessons
    .get("/")
    return response.data;
  } catch (err) {
          console.log(err);
        }
      };
    

  getOneLesson = async (id) => {
    try {
    let response = await this.lessons
    .get(`/${id}`)
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
 

  getOneQuiz = async (id) => {
    try {
    let response = await this.lessons
    .get(`/${id}/quiz`)
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
}

const lessonsService = new LessonsService();

export default lessonsService;


