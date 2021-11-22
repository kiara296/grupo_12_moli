
const validator = require('../services/validatorService');
const usersService = require('../services/usersService');

const userController = {
  login: (req, res) => {
    const message = null;
    res.render("login", { message });
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
