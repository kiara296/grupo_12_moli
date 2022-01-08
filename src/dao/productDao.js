// DATA ACCESS LAYER (data access object pattern)

const db = require('../../database/models');

const productDao = {
    getProducts: () => {
        return db.Product.findAll({
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

      getById: async (id) => {
        return db.Product.findByPk(
                id, 
                { include: [{ association: "product_category" }] }
              );
      },
}

module.exports = productDao;