const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/usuariosDatos.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
let bcrypt= require ('bcryptjs');
const db = require('../../database/models');
const userDao = require('../dao/userDao');

const usersService = {

    getById: async (id) => {
          const dataFetched = await userDao.getById(id);
          const user = {...dataFetched.dataValues, category_user: dataFetched.category_user.dataValues.name}
          return user;
        },
    

    auth: async (userName, pssw) => {
        try {
            const dataFetched = await db.User.findAll({
                where: {
                    username: userName,
                }
            });
            const dataMapped = dataFetched ? dataFetched.map(user => user.dataValues) : undefined;
            const user = dataMapped ? dataMapped.find(user => bcrypt.compareSync(pssw, user.password)) : undefined;
            return user;
        } catch(e) {
            console.log(e);
        }
    },

    persist: (user) => {
        const newUsersList = [...users, user];
        
        fs.writeFileSync(
            usersFilePath,
          JSON.stringify(newUsersList, null, " ")
        );
    },

    addProduct: (id) => {
        // TODO: logica de agregar producto al carrito (primero armar modelo de datos de la compra)
    },

    getNextId: () => {
        const ids = users.map((user) => user.id);
        return Math.max(...ids) + 1;
    },

    addUser: (user) => {
        users.push(user);
    },

    buildNewUser: (user) => {
        
        return {
            id: usersService.getNextId().toString(),
            name: user.name,
            lastname: user.lastname,
            userName: user.email,
            password: bcrypt.hashSync(user.pass, 10),
            category: '',
            image: user.image
        }
    },
    delete: async (id) => {
        await userDao.delete(id);
      },
    

}

module.exports = usersService;