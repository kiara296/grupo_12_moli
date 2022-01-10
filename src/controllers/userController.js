
const usersService = require('../services/usersService');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

const userController = {
  login: (req, res) => {
    const valueSearch = ''
    const message = null;
    const userName = null;
    const pssw = null;
    res.render("login", { message, userName, pssw, userLogged: req.session.userLogged, valueSearch });
 },

 auth: (req, res) => {
  res.redirect('/');
},

 logout: (req, res) => {
   req.session.userLogged = undefined;
   res.redirect('/users/login')
 },

  regmoli: (req, res) => {
    const valueSearch = ''
    let message = null;
    let errors = null;
    let data = null;
    res.render("regmoli", { errors, data, message, userLogged: req.session.userLogged, valueSearch  });
  },

  addProduct: (req, res) => {
    const idProduct = req.query.idProduct;
    usersService.addProduct(idProduct);
    res.redirect("/products/catalog");
  },

  addTransaction: (req, res) => {
    res.send('Compra realiza con exito')
  },

  register: (req, res) => {
    const valueSearch = ''
    const message = null;
    let errors = validationResult(req);
    if(errors.isEmpty()) {
      const data = {...req.body, 
        image: req.file ? req.file.filename : ""};
      const newUser = usersService.buildNewUser(data);

      usersService.persist(newUser);
      usersService.addUser(newUser);

      res.redirect('/users/login');
    } else {
      console.log (req.session.userLogged);
      res.render('regmoli', { errors: errors.mapped(), data: req.body, message,userLogged: req.session.userLogged, valueSearch });
    }

  }

};

module.exports = userController;
