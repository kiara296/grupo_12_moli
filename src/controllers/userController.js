
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

  auth: (req, res) => {
    res.redirect('/');
  },
  edit: async(req,res) => {
    const valueSearch = null;
    try{
      const errors = null;
      const data = null;
      
      const dataToEdit = await usersService.getById(req.params.id);
      const userToEdit = {... dataToEdit, password_confirm: dataToEdit.password
      }     
      res.render("editUserForm", {
        userToEdit,
        errors,
        data,
        userLogged: req.session.userLogged,
        valueSearch
      })
    } catch(e) {
      console.log("", e);
    }

  },
  update: function (req,res) {
    console.log(req.body)
    let errors = validationResult(req);
    const data = null;
    const valueSearch = null;
    let userId = req.params.id;
    
    if (errors.isEmpty()) {
      db.User.update(
        {
          username: req.body.username,
          password: req.body.password,
          name: req.body.name,
          lastname: req.body.lastname,
          image: req.file ? req.file.filename : ""
        },
        {
            where: {id: userId}
        })
        .then(()=> {
          return res.redirect("/")})   
          .catch(error => res.send(error))
    } else {
      let userToEdit = {id: req.params.id, ...req.body};
      
        res.render("editUserForm", {
          userToEdit,
          userLogged: req.session.userLogged,
          errors: errors.mapped(),
          valueSearch,
          data
        })
      
      ;
    }
  }, 

     delete: async (req, res) => {
      try {
        await usersService.delete(req.params.id);
      } catch(e) {
        console.log(e);
      }
      res.redirect("/users/login");
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
