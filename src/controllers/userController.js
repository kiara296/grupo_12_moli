
const usersService = require('../services/usersService');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

const userController = {
  login: (req, res) => {
       const message = req.query && req.query.message ? req.query.message : null;
    const userName = req.query && req.query.userName ? req.query.userName : null;
    const pssw = null;
    res.render("login", { message, userName, pssw, userLogged: req.session.userLogged});
 },

 logout: (req, res) => {
   req.session.userLogged = undefined;
   res.redirect('/users/login')
 },

  regmoli: (req, res) => {
    
    let message = null;
    let errors = null;
    let data = null;
    res.render("regmoli", { errors, data, message, userLogged: req.session.userLogged });
  },

  addTransaction: (req, res) => {
    res.send('Compra realiza con exito')
  },

  auth: (req, res) => {
    res.redirect('/');
  },
  edit: async(req,res) => {
    
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
        
      })
    } catch(e) {
      console.log("", e);
    }

  },
  update: function (req,res) {
    let errors = validationResult(req);
    const data = null;
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
          data
        })
      
      ;
    }
  }, 

     delete: async (req, res) => {
      try {
        await usersService.delete(req.params.id);
        req.session.userLogged = undefined
      } catch(e) {
        console.log(e);
      }
      res.redirect("/");
    },

  register: async (req, res) => {
    let errors = validationResult(req);
    let data = { ...req.body, file: req.file.filename};
    if (errors.isEmpty ()){
    try {
     
      await usersService.create(data)
      
      res.redirect("/users/login");
      
    } catch(e) {
      console.log("", e);
    }
  } else {
   
    let message = null;

    res.render("regmoli", {errors, userLogged: req.session.userLogged, data, message} )
  }
  },
};

module.exports = userController;
