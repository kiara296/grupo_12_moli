
const usersService = require('../services/usersService');
const { validationResult } = require('express-validator');

const userController = {
  login: (req, res) => {
    const message = null;
    const userName = null;
    const pssw = null;
    res.render("login", { message, userName, pssw, userLogged: req.session.userLogged });
 },

 logout: (req, res) => {
   req.session.userLogged = undefined;
   res.redirect('/users/login')
 },

  regmoli: (req, res) => {
    let message = null;
    let errors = null;
    let data = null;
    res.render("regmoli", { errors, data, message, userLogged: req.session.userLogged  });
  },

  addProduct: (req, res) => {
    const idProduct = req.query.idProduct;
    usersService.addProduct(idProduct);
    res.redirect("/products/catalog");
  },

  addTransaction: (req, res) => {
    res.send('Compra realiza con exito')
  },

  auth: (req, res) => {
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
      console.log (req.session.userLogged);
      res.render('regmoli', { errors: errors.mapped(), data: req.body, message,userLogged: req.session.userLogged });
    }

  }

};

module.exports = userController;
