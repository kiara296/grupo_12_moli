
// DATA ACCESS OBJECT PATTERN

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
}

module.exports = productDao;