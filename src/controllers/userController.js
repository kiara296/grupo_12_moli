
const validator = require('../services/validatorService');
const usersService = require('../services/usersService');

const userController = {
  login: (req, res) => {
    const message = null;
    const userName = null;
    const pssw = null;
    res.render("login", { message, userName, pssw });
 },

  regmoli: (req, res) => {
    res.render("regmoli");
  },

  addProduct: (req, res) => {
    const idProduct = req.query.idProduct;
    usersService.addProduct(idProduct);
    res.redirect("/products/catalog");
  },

  auth: (req, res) => {
      res.redirect('/');
  }
};

module.exports = userController;
