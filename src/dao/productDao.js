// DATA ACCESS LAYER (data access object pattern)

const db = require('../../database/models');
const { Op } = require("sequelize");

const productDao = {
    getProducts: async() => {
        return await db.Product.findAll({
          include: [{ association: "product_category" }]
        });
      },

    getRecommended: () => {
        return db.Product.findAll({
          include: [{ association: "product_category" }],
          where: {
            categoryProduct_id: 2
          }
        })
      },
    
      getOffer: () => {
        return db.Product.findAll({
          include: [{ association: "product_category" }],
          where: {
            categoryProduct_id: 1
          }
        })
      },

      create: (product) => {
        db.Product.create(product);
      },

      getById: (id) => {
        return db.Product.findByPk(
                id, 
                { include: [{ association: "product_category" }] }
              );
      },

      search: (value) => {
        return db.Product.findAll(
          {
            include: [
              { association: "product_category" }
            ],
            where: {
              name: {
                [Op.like]: '%' + value + '%'
              }
            }
          }
        );
      },

      delete: (paramId) => {
        db.Product.destroy({
          where: {
            id: paramId
          }
        });
      },
}

module.exports = productDao;