const path = require("path");

const userController = {
  login: (req, res) => {
    res.render("login");
  },
  regmoli: (req, res) => {
    res.render("regmoli");
  },
};

module.exports = userController;
