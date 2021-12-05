const fs = require("fs");
const path = require("path");
const productsService = require("./productsService");
const usersFilePath = path.join(__dirname, "../data/usuariosDatos.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
let bcrypt= require ('bcryptjs');

const usersService = {
    userLogged: null,

    getById: (id) => {
        return users.find(user => user.id == id);
    },

    auth: (userName, pssw) => {
        return users.find(user => user.userName == userName && bcrypt.compareSync(pssw,user.password));
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
            image: ''
        }
    },
}

module.exports = usersService;