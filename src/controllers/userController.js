
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
  },

  register: (req, res) => {
    const data = {...req.body};
    /* const name = req.body.name;
    const lastname = req.body.lastname;
    const user = req.body.email;
    const pass = req.body.pass;
    const passConfirm = req.body.pass_confirm; */

    /* const newUser = { name, lastname, user, pass, passConfirm }; */

    const newUser = usersService.buildNewUser(data);

    usersService.persist(newUser);
    usersService.addUser(newUser);

    res.redirect('/users/login');

  }

};

module.exports = userController;
