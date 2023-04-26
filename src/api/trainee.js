import requests from "./http/fetch";

const Trainee = {
  add: (body) => {
    return requests.post("/api/trainee/add", body);
  },
  getAll: () => {
    return requests.get("/api/trainee/getall");
  },
};

export default Trainee;
