const path = require("path");

const userController = {
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },
  regmoli: (req, res) => {
    res.render(path.join(__dirname, "../views/regmoli.ejs"));
  },
};

module.exports = userController;
