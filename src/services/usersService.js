const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/usuariosDatos.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
let bcrypt= require ('bcryptjs');
const db = require('../../database/models');
const userDao = require('../dao/userDao');

const usersService = {
    getUsers: async () => {
        const dataFetched = await userDao.getUsers();
    
        const usersMapped = mapDataToUsers(dataFetched);
    
        return usersMapped;
      },

    getById: async (id) => {
          const dataFetched = await userDao.getById(id);
          const user = {...dataFetched.dataValues, category_user: dataFetched.category_user.dataValues.name}
          return user;
        },

        getByIdApi: async (id) => {
            const dataFetched = await userDao.getById(id);
            const user = {...dataFetched.dataValues, password: null, category_user: null}
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

    getNextId: () => {
        const ids = users.map((user) => user.id);
        return Math.max(...ids) + 1;
    },

    addUser: (user) => {
        users.push(user);
    },

    delete: async (id) => {
        await userDao.delete(id);
      },
    
      create: async (body) => {
        const user = {
            name: body.name,
            lastname: body.lastname,
            username: body.email,
            password: bcrypt.hashSync(body.password, 10),
            category_id: 2,
            image: body.file ? body.file : ""
        }
    
          await userDao.create(user);
      },

      addProduct: (id) => {
        localStorage.setItem(id, );
      },

      findByEmail: async(email) => {
        
       return await userDao.findByEmail(email);
    
      },
      getUsersWithUrlDetail: (user) => {
        return user.map(user => getUserWithUrl(user));
      }
}
const mapDataToUsers = (data) => {
    return data.map(p => {
      return {...p.dataValues}
    });
    }

const getUserWithUrl = (user) => {
    return {...user, urlDetail: `/api/users/${user.id}/detail`}
      }
module.exports = usersService;