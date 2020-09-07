import axios from "axios";

export const getResults = () => {
  return axios
    .get("https://fierce-beyond-25336.herokuapp.com/")
    .then((response) => {
      return response.data;
    });
};
