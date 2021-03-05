import axios from "axios";

class LessonsService {
  constructor() {
    this.lessons = axios.create({
      baseURL: "http://localhost:5000/api/lessons",
      withCredentials: true,
    });
  }

  getAllLessons = () => {
    const pr = this.lessons
    .get("/")
    .then((response) => response.data);
    return pr;
  };

  getOneLesson = (id) => {
    const pr = this.lessons.get(`/${id}`).then((response) => response.data);

    return pr;
  };

  getOneQuiz = (id) => {
    const pr = this.lessons
      .get(`/${id}/quiz`)
      .then((response) => response.data);
    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const lessonsService = new LessonsService();

export default lessonsService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
