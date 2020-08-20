import axios from "axios";

return axios.create({
  baseURL: "https://disease.sh/v3/covid-19/",
});
