const usersService = require('../services/usersService');
const { validationResult } = require('express-validator');
const db = require('../../database/models');


const userControllerApi = {

    users: async (req, res) => {
        try {
          const users = await usersService.getUsers();
          const userWithUrlDetail = usersService.getUsersWithUrlDetail(users);
          
    
          return res.status(200).json({
          total: users.length,
          users: userWithUrlDetail,
          userLogged: req.session.userLogged,
          valueSearch:undefined,
          status: 200
          })
        } catch(e) {
          console.log("\nOcurrio un error al intentar cargar el listado de usuarios\n", e);
        }
    },
      detail: async(req,res) => {
    
        try{
                 
          const dataToEdit = await usersService.getByIdApi(req.params.id);
          const userToEdit = {... dataToEdit
            }   
            
            return res.status(200).json({
                userToEdit: userToEdit,
                userLogged: req.session.userLogged,
                status: 200,
                })
        } catch(e) {
          console.log("", e);
        }
        
    }

}


module.exports = userControllerApi;