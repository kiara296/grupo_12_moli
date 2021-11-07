
const validator = require('../services/validatorService');
const usersService = require('../services/usersService');

const userController = {
  login: (req, res) => {
    res.render("login");
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
    const userName = req.body.email;
    const pssw = req.body.pass
    usersService.auth(userName, pssw);
    const userLogged = usersService.userLogged;
    
    if(validator.isNullOrUndefined(userLogged)) {
      res.send('Credenciales incorrectas. Fallo autenticacion.');
    } else {
      usersService.userLogged = userLogged;
      res.redirect("/");
    }
  }
};

module.exports = userController;
