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
  getProjectById: function (id) {
    return axios.get(portfolioAPI, { headers }).then((res) => {
      const project = res.data[parseInt(id) - 1];
      console.log("id", id);
      console.log("project", project);

      return project;
    });
  },
};

export default api;
