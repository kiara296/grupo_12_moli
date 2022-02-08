const shoppingCartService = require('../services/shoppingCartService');

const shoppingCartController = {
    addProduct: (req, res) => {
        shoppingCartService.addProduct(req.query.idProduct);
        res.redirect("/products/catalog");
    },
}

module.exports = shoppingCartController;