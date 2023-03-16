import axios from "axios";

//   "API-KEY": "pk_fe0615293ada4cf689196891d4155333",

export const instance = axios.create({
  baseURL: "https://cloud.iexapis.com/",
});
