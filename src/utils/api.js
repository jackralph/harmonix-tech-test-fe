import axios from "axios";

export const getResults = (orderDesc) => {
  let orderBy;
  if (!orderDesc) {
    orderBy = -1;
  }
  return axios
    .get("https://fierce-beyond-25336.herokuapp.com/", {
      params: {
        orderBy: orderBy || 1,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const newComparison = (firstWord, secondWord) => {
  return axios.post("https://fierce-beyond-25336.herokuapp.com/", {
    firstWord,
    secondWord,
  });
};
