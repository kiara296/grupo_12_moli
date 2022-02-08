const productService = require('../services/productsService');

const shoppingCartService = {
    addProduct: (id) => {
        const product = productService.getById(id);
        localStorage.setItem(id, JSON.stringify(product));
    },
}

module.exports = shoppingCartService;