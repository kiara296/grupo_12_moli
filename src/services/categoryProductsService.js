const categoryProductDao = require('../dao/categoryProductDao');

const categoryProductService = {
    getCategories: async () => {
        const dataFetched = await categoryProductDao.getCategories();

        const categoriesMapped = dataFetched.map(c => c.dataValues);
      
        return categoriesMapped;
    }
}

module.exports = categoryProductService;