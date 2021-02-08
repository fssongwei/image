import axios from "axios";

const api = axios.create({});

api.interceptors.request.use((config) => {
  const token = window.sessionStorage.getItem("token");
  config.headers.Authorization = `bearer ${token}`;
  config.headers["Content-Type"] = "multipart/form-data";
  return config;
});

export default api;
