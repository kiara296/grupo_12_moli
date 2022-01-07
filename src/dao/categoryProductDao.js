// DATA ACCESS OBJECT PATTERN

const db = require('../../database/models');

const categoryProductDao = {
    getCategories: () => {
        return db.CategoryProduct.findAll();
      },

    
}

module.exports = categoryProductDao;