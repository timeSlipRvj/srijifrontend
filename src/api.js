import axios from "axios";
import { getAuthToken } from "./Utils/Local";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

if (getAuthToken()) {
  axios.defaults.headers.common["token"] = getAuthToken();
} else {
  delete axios.defaults.headers.common["token"];
}
export default axios.create({
  // baseURL: "https://shriji.herokuapp.com/",
  baseURL: "https://api.shrijishringar.com/",
  headers: {
    Accept: "applications/json",
  },
});

// export const baseUrl = "https://shriji.herokuapp.com/";
export const baseUrl = "https://api.shrijishringar.com/";
