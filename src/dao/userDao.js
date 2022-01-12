
const db = require('../../database/models');
const { Op } = require("sequelize");

const userDao = {

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


}

module.exports = userDao;