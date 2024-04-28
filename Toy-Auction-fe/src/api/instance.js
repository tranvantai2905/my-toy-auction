import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "x-access-token": "",
  },
});

instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser")).accessToken
      : "";
    console.log(token);

    if (config?.headers) {
      if (token) {
        config.headers["x-access-token"] = `${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
