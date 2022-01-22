
const db = require('../../database/models');
const { Op } = require("sequelize");

const userDao = {
  getUsers: async() => {
    return await db.User.findAll({
      include: [{ association: "category_user" }]
    });
  },
  
 getById: (id) => {
    return db.User.findByPk(
            id, 
            { include: [{ association: "category_user" }] }
          );
  },
  delete: (paramId) => {
    db.User.destroy({
      where: {
        id: paramId
      }
    });
  },
  create: (user) => {
    db.User.create(user);
  },

  findByEmail: (email) => {
    db.User.findOne({
      where: {
        username: email
      }
    });
  }

}

module.exports = userDao;