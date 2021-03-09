import axios from "axios";
const portfolioAPI = "https://james-gould.herokuapp.com/api/portfolio";

const headers = {
  "Content-Type": "text/json",
};

const api = {
  getPortfolio: function () {
    return axios.get(portfolioAPI, { headers }).then((res) => {
      const portfolio = res.data;
      return portfolio;
    });
  },
};

export default api;
