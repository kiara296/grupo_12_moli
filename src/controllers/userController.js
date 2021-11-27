
const usersService = require('../services/usersService');
const { validationResult } = require('express-validator');

const userController = {
  login: (req, res) => {
    const message = null;
    const userName = null;
    const pssw = null;
    res.render("login", { message, userName, pssw });
 },

  regmoli: (req, res) => {
    let message = null;
    let errors = null;
    let data = null;
    res.render("regmoli", { errors, data, message });
  },

  addProduct: (req, res) => {
    const idProduct = req.query.idProduct;
    usersService.addProduct(idProduct);
    res.redirect("/products/catalog");
  },

  auth: (req, res) => {
    /* console.log(req.session.userLogged); */
    res.redirect('/');
  },

  register: (req, res) => {
    let message = null;
    let errors = validationResult(req);
    if(errors.isEmpty()) {
      const data = {...req.body};
      const newUser = usersService.buildNewUser(data);

      usersService.persist(newUser);
      usersService.addUser(newUser);

      res.redirect('/users/login');
    } else {
      res.render('regmoli', { errors: errors.mapped(), data: req.body, message });
    }

  }

};

module.exports = userController;
