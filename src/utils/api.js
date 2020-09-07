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
      console.log(response.data);
      return response.data;
    });
};
